interface ProjectProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

export function Project({ title, description, href, image }: ProjectProps) {
  return (
    <a
      className="flex items-center justify-between gap-4 hover:text-gray-300 group"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="space-y-1">
        <h3 className="font-medium group-hover:text-primary-600">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <img
        className="size-10 rounded-sm border-[1px] border-gray-800/30"
        src={image}
        alt={title}
      />
    </a>
  );
}
