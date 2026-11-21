import Image from "next/image";
import type { ProjectMedia as ProjectMediaType } from "@/types/portfolio";

type ProjectMediaProps = {
  media: ProjectMediaType;
  priority?: boolean;
  sizes?: string;
  className?: string;
  linkToSource?: boolean;
};

export function ProjectMedia({
  media,
  priority = false,
  sizes = "(max-width: 64rem) calc(100vw - 2rem), 64rem",
  className,
  linkToSource = false,
}: ProjectMediaProps) {
  const portrait = media.height > media.width;
  const image = (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      quality={80}
      preload={priority}
      className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.012]"
    />
  );

  return (
    <figure className={`project-media ${className ?? ""}`}>
      <div
        className={`project-media__image overflow-hidden border border-line-2 bg-panel ${
          portrait ? "mx-auto max-w-md" : ""
        }`}
      >
        {linkToSource ? (
          <a href={media.src} target="_blank" rel="noreferrer" className="group block">
            {image}
            <span className="sr-only"> (opens full-size image in a new tab)</span>
          </a>
        ) : (
          image
        )}
      </div>
      <figcaption className="mt-3 text-[0.9rem] text-mute">{media.caption}</figcaption>
    </figure>
  );
}
