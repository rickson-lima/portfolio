type ContactProps = {
  label: string;
  href: string;
  icon: string;
};

export function Contact({ label, href, icon }: ContactProps) {
  return (
    <a
      className="flex items-end gap-4 dark:hover:text-gray-300 group"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      <div className="flex-1 border-b border-dashed border-gray-600 group-hover:border-gray-800 mb-1"></div>
      <img className="size-6" src={icon} alt={label} />
    </a>
  );
}
