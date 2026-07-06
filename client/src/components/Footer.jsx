import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-violet/20 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mist font-mono">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-fuchsia transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-fuchsia transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-fuchsia transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
