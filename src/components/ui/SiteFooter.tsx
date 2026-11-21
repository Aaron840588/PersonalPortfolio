import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-wrap justify-between gap-4 py-8 text-[0.9rem] text-mute">
        <p>Aaron Tagapan, IT operations and systems</p>
        <a className="link text-ink-2" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
