/**
 * The three marks from the hero drawing, reused as section markers so each
 * part of the page points back to the layer it belongs to:
 * people (ring), process (diamond), systems (block).
 */
export type Layer = "people" | "process" | "systems";

export function LayerMark({ layer, className = "size-3.5" }: { layer: Layer; className?: string }) {
  if (layer === "people") {
    return (
      <svg aria-hidden="true" viewBox="0 0 16 16" className={className} fill="none">
        <ellipse cx="8" cy="8" rx="6.2" ry="3.6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (layer === "process") {
    return (
      <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
        <path d="M8 4.2 14.6 8 8 11.8 1.4 8Z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className}>
      <path d="M8 1.5 13.6 4.7 8 7.9 2.4 4.7Z" fill="currentColor" />
      <path d="M2.4 4.7 8 7.9v6.6L2.4 11.3Z" fill="currentColor" opacity=".55" />
      <path d="M13.6 4.7 8 7.9v6.6l5.6-3.2Z" fill="currentColor" opacity=".8" />
    </svg>
  );
}

const LAYER_NAME: Record<Layer, string> = {
  people: "People",
  process: "Process",
  systems: "Systems",
};

type SectionHeadingProps = {
  id: string;
  layer?: Layer;
  title: string;
  intro?: string;
};

/** A section title set like a sheet in a drawing set: the layer it belongs to, then the title. */
export function SectionHeading({ id, layer, title, intro }: SectionHeadingProps) {
  return (
    <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12">
      <p className="flex items-center gap-2 self-start text-[0.9rem] text-mute md:col-span-3 md:pt-[1.1rem]">
        {layer ? (
          <>
            <LayerMark layer={layer} className="size-3.5 text-ink-2" />
            {LAYER_NAME[layer]} layer
          </>
        ) : null}
      </p>
      <div className="md:col-span-9">
        <h2 id={id} className="text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
          {title}
        </h2>
        {intro ? <p className="mt-4 max-w-[38rem] text-[1.08rem] text-ink-2">{intro}</p> : null}
      </div>
    </div>
  );
}
