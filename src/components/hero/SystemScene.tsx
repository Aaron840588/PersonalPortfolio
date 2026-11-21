"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/*
 * A three-layer "systems map": people, process and systems, joined by
 * links that carry small packets of work between them. The structure
 * tilts toward the pointer and pulls apart as the visitor scrolls.
 */

type Layer = {
  key: string;
  label: string;
  color: string;
  geometry: "sphere" | "octa" | "box";
  count: number;
};

const LAYERS: Layer[] = [
  { key: "systems", label: "Systems", color: "#4f7dff", geometry: "box", count: 11 },
  { key: "process", label: "Process", color: "#8ab4ff", geometry: "octa", count: 10 },
  { key: "people", label: "People", color: "#dfe7ff", geometry: "sphere", count: 9 },
];

const WIDTH = 4.6;
const DEPTH = 3.0;
const GAP = 1.25;
const SPARK = new THREE.Color("#ffb35c").multiplyScalar(1.6);

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Graph = {
  nodes: { layer: number; x: number; z: number }[];
  intra: [number, number][];
  inter: [number, number][];
  adjacency: number[][];
};

function buildGraph(): Graph {
  const rand = mulberry32(20260521);
  const nodes: Graph["nodes"] = [];
  LAYERS.forEach((layer, li) => {
    const placed: { x: number; z: number }[] = [];
    let guard = 0;
    while (placed.length < layer.count && guard++ < 4000) {
      const x = (rand() - 0.5) * (WIDTH - 0.7);
      const z = (rand() - 0.5) * (DEPTH - 0.6);
      if (placed.every((p) => Math.hypot(p.x - x, p.z - z) > 0.78)) {
        placed.push({ x, z });
      }
    }
    placed.forEach((p) => nodes.push({ layer: li, ...p }));
  });

  const byLayer = (li: number) =>
    nodes.map((n, i) => ({ n, i })).filter(({ n }) => n.layer === li);
  const dist = (a: number, b: number) =>
    Math.hypot(nodes[a].x - nodes[b].x, nodes[a].z - nodes[b].z);

  const seen = new Set<string>();
  const intra: [number, number][] = [];
  const inter: [number, number][] = [];
  const add = (list: [number, number][], a: number, b: number) => {
    const k = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (seen.has(k)) return;
    seen.add(k);
    list.push([a, b]);
  };

  LAYERS.forEach((_, li) => {
    const own = byLayer(li);
    own.forEach(({ i }) => {
      own
        .filter(({ i: j }) => j !== i)
        .sort((a, b) => dist(i, a.i) - dist(i, b.i))
        .slice(0, 2)
        .forEach(({ i: j }) => add(intra, i, j));
    });
    if (li < LAYERS.length - 1) {
      const next = byLayer(li + 1);
      own.forEach(({ i }) => {
        next
          .slice()
          .sort((a, b) => dist(i, a.i) - dist(i, b.i))
          .slice(0, 2)
          .forEach(({ i: j }) => add(inter, i, j));
      });
    }
  });

  const adjacency: number[][] = nodes.map(() => []);
  [...intra, ...inter].forEach(([a, b]) => {
    adjacency[a].push(b);
    adjacency[b].push(a);
  });

  return { nodes, intra, inter, adjacency };
}

type Packet = { from: number; to: number; t: number; speed: number };

function useScrollProgress() {
  const progress = useRef(0);
  useEffect(() => {
    const update = () => {
      progress.current = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.75)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return progress;
}

function usePointer() {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return pointer;
}

// The scene is a single, client-only instance, so its simulation state lives
// at module scope and is mutated inside the render loop, outside React.
const GRAPH = buildGraph();
const HEAT = new Float32Array(GRAPH.nodes.length);
const LAYER_NODES: number[][] = LAYERS.map((_, li) =>
  GRAPH.nodes.flatMap((n, i) => (n.layer === li ? [i] : [])),
);

function edgeGeometry(count: number) {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 6), 3));
  return g;
}
const INTRA_GEOMETRY = edgeGeometry(GRAPH.intra.length);
const INTER_GEOMETRY = edgeGeometry(GRAPH.inter.length);

const PACKETS: Packet[] = (() => {
  const rand = mulberry32(7);
  const edges = [...GRAPH.inter, ...GRAPH.intra];
  return Array.from({ length: 64 }, () => {
    const [a, b] = edges[Math.floor(rand() * edges.length)];
    const flip = rand() > 0.5;
    return { from: flip ? a : b, to: flip ? b : a, t: rand(), speed: 0.25 + rand() * 0.45 };
  });
})();

const OUTLINE = (() => {
  const shape = new THREE.Shape();
  const w = WIDTH / 2;
  const d = DEPTH / 2;
  const r = 0.28;
  shape.moveTo(-w + r, -d);
  shape.lineTo(w - r, -d);
  shape.quadraticCurveTo(w, -d, w, -d + r);
  shape.lineTo(w, d - r);
  shape.quadraticCurveTo(w, d, w - r, d);
  shape.lineTo(-w + r, d);
  shape.quadraticCurveTo(-w, d, -w, d - r);
  shape.lineTo(-w, -d + r);
  shape.quadraticCurveTo(-w, -d, -w + r, -d);
  return {
    line: new THREE.BufferGeometry().setFromPoints(shape.getPoints(12)),
    fill: new THREE.ShapeGeometry(shape, 12),
  };
})();

const TMP = {
  m: new THREE.Matrix4(),
  v: new THREE.Vector3(),
  a: new THREE.Vector3(),
  b: new THREE.Vector3(),
  q: new THREE.Quaternion(),
  e: new THREE.Euler(),
  s: new THREE.Vector3(),
  c: new THREE.Color(),
  base: LAYERS.map((l) => new THREE.Color(l.color)),
};

const SIM = { spread: 1 };

function SystemMap({ animate, packetCount }: { animate: boolean; packetCount: number }) {
  const scroll = useScrollProgress();
  const pointer = usePointer();
  const { viewport } = useThree();

  const root = useRef<THREE.Group>(null);
  const nodeMeshes = useRef<(THREE.InstancedMesh | null)[]>([]);
  const packetMesh = useRef<THREE.InstancedMesh>(null);
  const planes = useRef<(THREE.Group | null)[]>([]);

  useFrame((state, rawDelta) => {
    const graph = GRAPH;
    const heat = HEAT;
    const packets = PACKETS;
    const tmp = TMP;
    const layerY = (li: number) => (li - 1) * GAP * SIM.spread;
    const delta = Math.min(rawDelta, 1 / 30);
    const t = state.clock.elapsedTime;
    const s = scroll.current;
    const group = root.current;
    if (!group) return;
    // Reduced motion renders on demand, so settle immediately instead of easing.
    const ease = animate ? 1 : 1000;

    // Layout: sit to the right on wide screens, centred and smaller on tall ones.
    const aspect = viewport.aspect;
    const wide = aspect > 1.15;
    const baseX = wide ? Math.min(3.1, viewport.width * 0.24) : 0;
    const targetX = baseX * (1 - s);
    const scale = wide ? Math.min(0.86, viewport.width / 13) : Math.min(0.95, viewport.width / 6.2);
    group.position.x = THREE.MathUtils.damp(group.position.x, targetX, 4 * ease, delta);
    group.scale.setScalar(
      THREE.MathUtils.damp(group.scale.x, scale * (1 + s * (wide ? 0.2 : 0.1)), 4 * ease, delta),
    );

    // Pointer tilt + idle sway + scroll-driven turn.
    const sway = animate ? Math.sin(t * 0.18) * 0.22 : 0;
    const targetRy = -0.55 + sway + pointer.current.x * 0.28 + s * 0.9;
    const targetRx = 0.52 + pointer.current.y * 0.12 - s * 0.3;
    group.rotation.y = THREE.MathUtils.damp(group.rotation.y, targetRy, 3 * ease, delta);
    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, targetRx, 3 * ease, delta);
    group.position.y = THREE.MathUtils.damp(group.position.y, wide ? s * 0.05 : s * 0.8, 4 * ease, delta);
    SIM.spread = THREE.MathUtils.damp(SIM.spread, 1 + s * 0.95, 4 * ease, delta);

    planes.current.forEach((p, li) => {
      if (p) p.position.y = layerY(li);
    });

    const pos = (i: number, out: THREE.Vector3) =>
      out.set(graph.nodes[i].x, layerY(graph.nodes[i].layer), graph.nodes[i].z);

    // Links
    const writeEdges = (geometry: THREE.BufferGeometry, edges: [number, number][]) => {
      const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
      edges.forEach(([a, b], k) => {
        pos(a, tmp.v);
        attr.setXYZ(k * 2, tmp.v.x, tmp.v.y, tmp.v.z);
        pos(b, tmp.v);
        attr.setXYZ(k * 2 + 1, tmp.v.x, tmp.v.y, tmp.v.z);
      });
      attr.needsUpdate = true;
    };
    writeEdges(INTRA_GEOMETRY, graph.intra);
    writeEdges(INTER_GEOMETRY, graph.inter);

    // Packets walk the graph; a node flares when one arrives.
    const pm = packetMesh.current;
    if (pm) {
      const { a, b } = tmp;
      for (let k = 0; k < packetCount; k++) {
        const p = packets[k];
        if (animate) {
          p.t += delta * p.speed;
          if (p.t >= 1) {
            heat[p.to] = 1;
            const options = graph.adjacency[p.to].filter((n) => n !== p.from);
            const next = options.length
              ? options[Math.floor(Math.random() * options.length)]
              : p.from;
            p.from = p.to;
            p.to = next;
            p.t = 0;
          }
        }
        pos(p.from, a);
        pos(p.to, b);
        tmp.v.lerpVectors(a, b, p.t);
        const size = 0.026 + Math.sin(p.t * Math.PI) * 0.016;
        tmp.m.compose(tmp.v, tmp.q.identity(), tmp.s.setScalar(size / 0.05));
        pm.setMatrixAt(k, tmp.m);
      }
      pm.instanceMatrix.needsUpdate = true;
    }

    // Nodes
    LAYER_NODES.forEach((indices, li) => {
      const mesh = nodeMeshes.current[li];
      if (!mesh) return;
      indices.forEach((nodeIndex, k) => {
        heat[nodeIndex] = Math.max(0, heat[nodeIndex] - delta * 1.6);
        const h = heat[nodeIndex];
        // Node meshes live inside their layer group, so use layer-local height.
        tmp.v.set(graph.nodes[nodeIndex].x, 0, graph.nodes[nodeIndex].z);
        const bob = animate ? Math.sin(t * 1.3 + nodeIndex) * 0.025 : 0;
        tmp.v.y += 0.09 + bob;
        tmp.q.setFromEuler(tmp.e.set(0, t * 0.4 + nodeIndex, 0));
        tmp.m.compose(tmp.v, tmp.q, tmp.s.setScalar(1 + h * 0.45));
        mesh.setMatrixAt(k, tmp.m);
        tmp.c.copy(tmp.base[li]).lerp(SPARK, h * 0.85);
        mesh.setColorAt(k, tmp.c);
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    });
  });

  return (
    <group ref={root} rotation={[0.52, -0.55, 0]}>
      {LAYERS.map((layer, li) => (
        <group
          key={layer.key}
          ref={(el) => {
            planes.current[li] = el;
          }}
        >
          <mesh geometry={OUTLINE.fill} rotation={[-Math.PI / 2, 0, 0]}>
            <meshBasicMaterial
              color={layer.color}
              transparent
              opacity={0.022}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
          <lineLoop geometry={OUTLINE.line} rotation={[-Math.PI / 2, 0, 0]}>
            <lineBasicMaterial color={layer.color} transparent opacity={0.35} />
          </lineLoop>
          <Html
            position={[WIDTH / 2 - 0.1, 0.02, DEPTH / 2 - 0.1]}
            className="pointer-events-none select-none whitespace-nowrap text-[11px] font-semibold tracking-wide text-[#8792ab]"
            zIndexRange={[1, 0]}
          >
            <span aria-hidden="true">{layer.label}</span>
          </Html>
          <instancedMesh
            ref={(el) => {
              nodeMeshes.current[li] = el;
            }}
            args={[undefined, undefined, LAYER_NODES[li].length]}
          >
            {layer.geometry === "box" ? (
              <boxGeometry args={[0.16, 0.16, 0.16]} />
            ) : layer.geometry === "octa" ? (
              <octahedronGeometry args={[0.11, 0]} />
            ) : (
              <sphereGeometry args={[0.085, 20, 20]} />
            )}
            <meshStandardMaterial
              color="#ffffff"
              roughness={0.35}
              metalness={0.1}
              emissive={layer.color}
              emissiveIntensity={0.25}
              toneMapped={false}
            />
          </instancedMesh>
        </group>
      ))}

      <lineSegments geometry={INTRA_GEOMETRY}>
        <lineBasicMaterial color="#8ab4ff" transparent opacity={0.22} depthWrite={false} />
      </lineSegments>
      <lineSegments geometry={INTER_GEOMETRY}>
        <lineBasicMaterial color="#8ab4ff" transparent opacity={0.14} depthWrite={false} />
      </lineSegments>

      <instancedMesh ref={packetMesh} args={[undefined, undefined, packetCount]}>
        <sphereGeometry args={[0.05, 10, 10]} />
        <meshBasicMaterial color={SPARK} toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

export default function SystemScene() {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 700px)");
    const sync = () => {
      setReduced(motion.matches);
      setSmall(narrow.matches);
    };
    sync();
    motion.addEventListener("change", sync);
    narrow.addEventListener("change", sync);

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (container.current) observer.observe(container.current);
    return () => {
      motion.removeEventListener("change", sync);
      narrow.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={container} className="absolute inset-0">
      <Canvas
        frameloop={visible ? (reduced ? "demand" : "always") : "never"}
        dpr={[1, small ? 1.5 : 1.75]}
        camera={{ position: [0, 0.4, 8.2], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 6, 4]} intensity={1.4} />
        <pointLight position={[-4, -2, 3]} intensity={18} color="#3d6bff" />
        <SystemMap animate={!reduced} packetCount={small ? 22 : 38} />
        <EffectComposer multisampling={0}>
          <Bloom mipmapBlur luminanceThreshold={0.85} intensity={small ? 0.5 : 0.7} radius={0.6} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
