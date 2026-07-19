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
  sizes = "(max-width: 47.99rem) calc(100vw - 2rem), (max-width: 99.99rem) 60vw, 60rem",
  className,
  linkToSource = false,
}: ProjectMediaProps) {
  const image = (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      quality={80}
      preload={priority}
    />
  );

  return (
    <figure className={`project-media${className ? ` ${className}` : ""}`}>
      <div className="project-media__image">
        {linkToSource ? (
          <a
            href={media.src}
            target="_blank"
            rel="noreferrer"
          >
            {image}
            <span className="sr-only"> (opens full-size image in a new tab)</span>
          </a>
        ) : (
          image
        )}
      </div>
      <figcaption>{media.caption}</figcaption>
    </figure>
  );
}
