import type { ElementType } from "react";

interface ContactProps {
  label: string;
  href: string;
  icon: ElementType;
  displayUrl?: string;
}

export function Contact({ label, href, icon: Icon, displayUrl }: ContactProps) {
  return (
    <a
      className="flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-white/5 transition-colors group"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center justify-center size-10 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
        <Icon className="size-5" />
      </div>

      <div className="flex flex-col">
        <span className="font-medium text-zinc-200 group-hover:text-blue-400 transition-colors">
          {label}
        </span>
        {displayUrl && (
          <span className="text-xs text-zinc-500">{displayUrl}</span>
        )}
      </div>
    </a>
  );
}
