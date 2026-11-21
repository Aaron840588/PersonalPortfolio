"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/*
 * An exploded axonometric drawing of a small system: three layers (people,
 * process, systems) drawn as drafting planes. One request at a time traces a
 * route from a person, through a process, into a system and back, the way a
 * support ticket moves. The drawing inks itself in once, then scrolling pulls
 * the layers apart into an exploded view.
 */

const INK = new THREE.Color("#e9edf6");
const RULE = new THREE.Color("#8792ab");
const SIGNAL = new THREE.Color("#ffb35c").multiplyScalar(1.15);

type Glyph = "ring" | "diamond" | "cube";
type Layer = { key: string; label: string; detail: string; glyph: Glyph; count: number };

// Bottom to top, as drawn.
const LAYERS: Layer[] = [
  { key: "systems", label: "Systems", detail: "apps, data and infrastructure", glyph: "cube", count: 9 },
  { key: "process", label: "Process", detail: "workflows and rules", glyph: "diamond", count: 8 },
  { key: "people", label: "People", detail: "users and requests", glyph: "ring", count: 7 },
];

const WIDTH = 4.4;
const DEPTH = 3.0;
const GAP = 1.6;
const DRAW_IN = 1.8; // seconds for the drawing to ink in
const TRACE = 3.2; // seconds for one request to travel its route
const HOLD = 1.4; // seconds the finished route stays visible

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Node = { layer: number; x: number; z: number };

function buildGraph() {
  const rand = mulberry32(2026);
  const nodes: Node[] = [];
  LAYERS.forEach((layer, li) => {
    // Snap to a half-unit drafting grid so the drawing reads as planned, not scattered.
    const cells: [number, number][] = [];
    for (let x = -1.75; x <= 1.75; x += 0.5) for (let z = -1.0; z <= 1.0; z += 0.5) cells.push([x, z]);
    const picked: [number, number][] = [];
    while (picked.length < layer.count && cells.length) {
      const [x, z] = cells.splice(Math.floor(rand() * cells.length), 1)[0];
      if (picked.every(([px, pz]) => Math.abs(px - x) + Math.abs(pz - z) > 0.75)) picked.push([x, z]);
    }
    picked.forEach(([x, z]) => nodes.push({ layer: li, x, z }));
  });

  const dist = (a: number, b: number) =>
    Math.hypot(nodes[a].x - nodes[b].x, nodes[a].z - nodes[b].z);
  const inLayer = (li: number) => nodes.flatMap((n, i) => (n.layer === li ? [i] : []));

  const seen = new Set<string>();
  const intra: [number, number][] = [];
  const inter: [number, number][] = [];
  const add = (list: [number, number][], a: number, b: number) => {
    const k = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (!seen.has(k)) {
      seen.add(k);
      list.push([a, b]);
    }
  };

  LAYERS.forEach((_, li) => {
    const own = inLayer(li);
    own.forEach((i) => {
      own
        .filter((j) => j !== i)
        .sort((a, b) => dist(i, a) - dist(i, b))
        .slice(0, 2)
        .forEach((j) => add(intra, i, j));
    });
    if (li < LAYERS.length - 1) {
      const next = inLayer(li + 1);
      own.forEach((i) => add(inter, i, next.slice().sort((a, b) => dist(i, a) - dist(i, b))[0]));
    }
  });

  const up = new Map<number, number[]>();
  inter.forEach(([a, b]) => {
    const [lo, hi] = nodes[a].layer < nodes[b].layer ? [a, b] : [b, a];
    up.set(hi, [...(up.get(hi) ?? []), lo]);
  });

  return { nodes, intra, inter, up, inLayer };
}

const GRAPH = buildGraph();

/** A request route: person → process → system → process → person. */
function makeRoute(rand: () => number): number[] {
  const people = GRAPH.inLayer(2).filter((p) => (GRAPH.up.get(p) ?? []).length > 0);
  for (let attempt = 0; attempt < 30; attempt++) {
    const person = people[Math.floor(rand() * people.length)];
    const procs = GRAPH.up.get(person) ?? [];
    const proc = procs[Math.floor(rand() * procs.length)];
    const systems = GRAPH.up.get(proc) ?? [];
    if (!systems.length) continue;
    const system = systems[Math.floor(rand() * systems.length)];
    return [person, proc, system, proc, person];
  }
  return [people[0]];
}

// Mutable drawing state lives outside React: the scene is a single client-only instance.
const SIM = {
  spread: 1,
  route: [] as number[],
  routeStart: 0,
  rand: mulberry32(7),
};

function edgeGeometry(count: number) {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 6), 3));
  return g;
}
const INTRA = edgeGeometry(GRAPH.intra.length);
const INTER = edgeGeometry(GRAPH.inter.length);
const ROUTE = edgeGeometry(4);

const PLANE = (() => {
  const w = WIDTH / 2;
  const d = DEPTH / 2;
  const outline = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-w, 0, -d),
    new THREE.Vector3(w, 0, -d),
    new THREE.Vector3(w, 0, d),
    new THREE.Vector3(-w, 0, d),
  ]);
  const grid: number[] = [];
  for (let x = -w + 0.5; x < w - 0.01; x += 0.5) grid.push(x, 0, -d, x, 0, d);
  for (let z = -d + 0.5; z < d - 0.01; z += 0.5) grid.push(-w, 0, z, w, 0, z);
  const gridGeo = new THREE.BufferGeometry();
  gridGeo.setAttribute("position", new THREE.Float32BufferAttribute(grid, 3));
  // Registration ticks at each corner, like a print mark.
  const t = 0.18;
  const ticks = [
    -w - t, 0, -d, -w, 0, -d, w, 0, -d, w + t, 0, -d,
    -w - t, 0, d, -w, 0, d, w, 0, d, w + t, 0, d,
  ];
  const tickGeo = new THREE.BufferGeometry();
  tickGeo.setAttribute("position", new THREE.Float32BufferAttribute(ticks, 3));
  return { outline, grid: gridGeo, ticks: tickGeo };
})();

const GLYPHS: Record<Glyph, THREE.BufferGeometry> = {
  ring: new THREE.RingGeometry(0.075, 0.105, 28).rotateX(-Math.PI / 2),
  // In an isometric view an axis-aligned square on the plane reads as a flowchart diamond.
  diamond: new THREE.PlaneGeometry(0.17, 0.17).rotateX(-Math.PI / 2),
  // Systems are small shaded blocks, like servers on a rack diagram.
  cube: new THREE.BoxGeometry(0.15, 0.15, 0.15).translate(0, 0.075, 0),
};

function useWindowSignals() {
  const signals = useRef({ scroll: 0, px: 0, py: 0 });
  useEffect(() => {
    const onScroll = () => {
      signals.current.scroll = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.75)));
    };
    const onMove = (e: PointerEvent) => {
      signals.current.px = (e.clientX / window.innerWidth) * 2 - 1;
      signals.current.py = (e.clientY / window.innerHeight) * 2 - 1;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
  return signals;
}

const TMP = { v: new THREE.Vector3(), m: new THREE.Matrix4(), c: new THREE.Color() };

type FadeMaterial = THREE.Material & { opacity: number };
// Stroke materials and the beat each one inks in on.
const FADES = new Map<FadeMaterial, { base: number; delay: number }>();
const fadeIn = (base: number, delay: number) => (mat: FadeMaterial | null) => {
  if (mat) FADES.set(mat, { base, delay });
};
const ROUTE_MATERIAL: { current: THREE.LineBasicMaterial | null } = { current: null };
// Layer labels are plain HTML positioned each frame from their anchor on the plane's right corner.
const LABELS: (HTMLElement | null)[] = [];
const labelRef = (li: number) => (el: HTMLElement | null) => {
  LABELS[li] = el;
};
const LABEL_ANCHOR = new THREE.Vector3(WIDTH / 2 + 0.12, 0, -DEPTH / 2 - 0.12);
const registerRoute = (mat: THREE.LineBasicMaterial | null) => {
  ROUTE_MATERIAL.current = mat;
};

function Drawing({ animate }: { animate: boolean }) {
  const signals = useWindowSignals();
  const root = useRef<THREE.Group>(null);
  const layerGroups = useRef<(THREE.Group | null)[]>([]);
  const glyphs = useRef<(THREE.InstancedMesh | null)[]>([]);
  const head = useRef<THREE.Mesh>(null);

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 1 / 30);
    const t = animate ? state.clock.elapsedTime : DRAW_IN + TRACE;
    const ease = animate ? 1 : 1000;
    const { scroll, px, py } = signals.current;
    const group = root.current;
    if (!group) return;

    // Fit the drawing: right of the copy on wide screens, centred above it on narrow ones.
    const { size } = state;
    // Matches the layout's lg breakpoint, where the canvas spans the whole hero.
    const wide = size.width >= 1024;
    const ortho = state.camera as THREE.OrthographicCamera;
    const targetZoom = wide ? Math.min(size.width / 15, size.height / 7.6) : Math.min(size.width / 7.4, size.height / 5.2);
    ortho.zoom = THREE.MathUtils.damp(ortho.zoom, targetZoom * (1 + scroll * 0.12), 6 * ease, delta);
    ortho.updateProjectionMatrix();
    const viewWidth = size.width / ortho.zoom;
    const offsetX = wide ? viewWidth * 0.17 * (1 - scroll) : -0.35;
    // Offset along the camera's screen-right axis so the isometric angle is preserved.
    group.position.set(offsetX * 0.707, wide ? -0.15 : 0.1, -offsetX * 0.707);

    group.rotation.y = THREE.MathUtils.damp(group.rotation.y, px * 0.06, 3 * ease, delta);
    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, py * 0.03, 3 * ease, delta);
    SIM.spread = THREE.MathUtils.damp(SIM.spread, 1 + scroll * 0.6, 5 * ease, delta);

    const layerY = (li: number) => (li - 1) * GAP * SIM.spread;
    layerGroups.current.forEach((g, li) => g && (g.position.y = layerY(li)));
    const pos = (i: number, out: THREE.Vector3) =>
      out.set(GRAPH.nodes[i].x, layerY(GRAPH.nodes[i].layer), GRAPH.nodes[i].z);

    // Ink in: each stroke set fades up on its own beat.
    const reveal = Math.min(1, t / DRAW_IN);
    FADES.forEach(({ base, delay }, mat) => {
      const k = THREE.MathUtils.clamp((t - delay) / 0.6, 0, 1);
      mat.opacity = base * (1 - Math.pow(1 - k, 3));
    });

    const write = (geo: THREE.BufferGeometry, edges: [number, number][], drawn: number) => {
      const attr = geo.getAttribute("position") as THREE.BufferAttribute;
      edges.forEach(([a, b], k) => {
        pos(a, TMP.v);
        attr.setXYZ(k * 2, TMP.v.x, TMP.v.y, TMP.v.z);
        pos(b, TMP.v);
        attr.setXYZ(k * 2 + 1, TMP.v.x, TMP.v.y, TMP.v.z);
      });
      attr.needsUpdate = true;
      geo.setDrawRange(0, Math.floor(edges.length * drawn) * 2);
    };
    write(INTRA, GRAPH.intra, THREE.MathUtils.clamp((reveal - 0.2) / 0.6, 0, 1));
    write(INTER, GRAPH.inter, THREE.MathUtils.clamp((reveal - 0.45) / 0.55, 0, 1));

    // The request route.
    const cycle = TRACE + HOLD;
    if (!SIM.route.length || (animate && t - SIM.routeStart > cycle)) {
      SIM.route = makeRoute(SIM.rand);
      // Reduced motion renders one still frame, so show a completed route.
      SIM.routeStart = animate ? Math.max(t, DRAW_IN) : t - TRACE;
    }
    const local = t - SIM.routeStart;
    const progress = THREE.MathUtils.clamp(local / TRACE, 0, 1);
    const fade = local > TRACE ? 1 - THREE.MathUtils.clamp((local - TRACE) / HOLD, 0, 1) : 1;
    const legs = SIM.route.length - 1;
    const along = progress * legs;
    const routeAttr = ROUTE.getAttribute("position") as THREE.BufferAttribute;
    let headSet = false;
    for (let k = 0; k < legs; k++) {
      const a = pos(SIM.route[k], new THREE.Vector3());
      const b = pos(SIM.route[k + 1], new THREE.Vector3());
      const f = THREE.MathUtils.clamp(along - k, 0, 1);
      // Return legs sit a hair beside the outbound ones so both stay visible.
      const nudge = k >= legs / 2 ? 0.05 : 0;
      a.x += nudge;
      b.x += nudge;
      const end = a.clone().lerp(b, f);
      routeAttr.setXYZ(k * 2, a.x, a.y, a.z);
      routeAttr.setXYZ(k * 2 + 1, end.x, end.y, end.z);
      if (!headSet && f < 1) {
        head.current?.position.copy(end);
        headSet = true;
      }
    }
    if (!headSet) head.current?.position.copy(pos(SIM.route[SIM.route.length - 1], TMP.v));
    routeAttr.needsUpdate = true;
    ROUTE.setDrawRange(0, legs * 2);
    const routeMat = ROUTE_MATERIAL.current;
    if (routeMat) routeMat.opacity = reveal >= 1 ? fade : 0;
    if (head.current) {
      (head.current.material as THREE.MeshBasicMaterial).opacity = reveal >= 1 ? fade : 0;
      head.current.rotation.y = t * 1.5;
    }

    // Glyphs: ink by default, amber once the request has reached them.
    const reached = new Set(SIM.route.slice(0, Math.floor(along) + 1));
    LAYERS.forEach((_, li) => {
      const mesh = glyphs.current[li];
      if (!mesh) return;
      GRAPH.inLayer(li).forEach((nodeIndex, k) => {
        const node = GRAPH.nodes[nodeIndex];
        TMP.m.makeTranslation(node.x, 0.002, node.z);
        mesh.setMatrixAt(k, TMP.m);
        const lit = reveal >= 1 && reached.has(nodeIndex) ? fade : 0;
        mesh.setColorAt(k, TMP.c.copy(INK).lerp(SIGNAL, lit));
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      (mesh.material as THREE.MeshBasicMaterial | THREE.MeshLambertMaterial).opacity = THREE.MathUtils.clamp((t - 0.5 - li * 0.15) / 0.5, 0, 1);
    });

    // Project each layer's label anchor to screen space.
    LAYERS.forEach((_, li) => {
      const el = LABELS[li];
      const g = layerGroups.current[li];
      if (!el || !g) return;
      g.updateWorldMatrix(true, false);
      TMP.v.copy(LABEL_ANCHOR).applyMatrix4(g.matrixWorld).project(state.camera);
      const x = (TMP.v.x * 0.5 + 0.5) * size.width;
      const y = (-TMP.v.y * 0.5 + 0.5) * size.height;
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translateY(-50%)`;
      el.style.opacity = String(THREE.MathUtils.clamp((t - 0.9 - li * 0.15) / 0.5, 0, 1));
    });
  });

  return (
    <group ref={root}>
      {LAYERS.map((layer, li) => (
        <group
          key={layer.key}
          ref={(el) => {
            layerGroups.current[li] = el;
          }}
        >
          <lineSegments geometry={PLANE.grid}>
            <lineBasicMaterial ref={fadeIn(0.09, 0.15 + li * 0.18)} color={RULE} transparent opacity={0} />
          </lineSegments>
          <lineLoop geometry={PLANE.outline}>
            <lineBasicMaterial ref={fadeIn(0.55, li * 0.18)} color={INK} transparent opacity={0} />
          </lineLoop>
          <lineSegments geometry={PLANE.ticks}>
            <lineBasicMaterial ref={fadeIn(0.5, 0.1 + li * 0.18)} color={INK} transparent opacity={0} />
          </lineSegments>
          <instancedMesh
            ref={(el) => {
              glyphs.current[li] = el;
            }}
            args={[GLYPHS[layer.glyph], undefined, GRAPH.inLayer(li).length]}
          >
            {layer.glyph === "cube" ? (
              <meshLambertMaterial color="#ffffff" transparent opacity={0} />
            ) : (
              <meshBasicMaterial color="#ffffff" transparent opacity={0} side={THREE.DoubleSide} />
            )}
          </instancedMesh>
        </group>
      ))}

      <lineSegments geometry={INTRA}>
        <lineBasicMaterial ref={fadeIn(0.32, 0.4)} color={INK} transparent opacity={0} />
      </lineSegments>
      <lineSegments geometry={INTER}>
        <lineBasicMaterial ref={fadeIn(0.18, 0.8)} color={RULE} transparent opacity={0} />
      </lineSegments>
      <lineSegments geometry={ROUTE}>
        <lineBasicMaterial
          ref={registerRoute}
          color={SIGNAL}
          transparent
          opacity={0}
        />
      </lineSegments>
      <mesh ref={head} geometry={GLYPHS.diamond} scale={0.85}>
        <meshBasicMaterial color={SIGNAL} transparent opacity={0} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function SystemScene() {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(motion.matches);
    sync();
    motion.addEventListener("change", sync);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (container.current) observer.observe(container.current);
    return () => {
      motion.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={container} className="absolute inset-0">
      <Canvas
        orthographic
        frameloop={visible ? (reduced ? "demand" : "always") : "never"}
        dpr={[1, 2]}
        camera={{ position: [10, 8.2, 10], zoom: 80, near: -50, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "none" }}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[2, 6, 3]} intensity={1.8} />
        <Drawing animate={!reduced} />
      </Canvas>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        {LAYERS.map((layer, li) => (
          <span
            key={layer.key}
            ref={labelRef(li)}
            className="absolute left-0 top-0 block whitespace-nowrap pl-2 text-[12px] leading-tight opacity-0"
          >
            <span className="block font-semibold text-ink">{layer.label}</span>
            <span className="hidden text-mute sm:block">{layer.detail}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
