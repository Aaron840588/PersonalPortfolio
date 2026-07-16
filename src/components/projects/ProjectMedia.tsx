import Image from "next/image";
import type { ProjectMedia as ProjectMediaType } from "@/types/portfolio";

type ProjectMediaProps = {
  media: ProjectMediaType;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function ProjectMedia({
  media,
  priority = false,
  sizes = "(max-width: 767px) 100vw, 60vw",
  className,
}: ProjectMediaProps) {
  const portrait = media.src.endsWith("/invoice-builder.png");

  return (
    <figure className={`project-media${className ? ` ${className}` : ""}`}>
      <div className="project-media__image">
        <Image
          src={media.src}
          alt={media.alt}
          width={portrait ? 639 : 1280}
          height={portrait ? 642 : 720}
          sizes={sizes}
          quality={90}
          preload={priority}
        />
      </div>
      <figcaption>{media.caption}</figcaption>
    </figure>
  );
}
