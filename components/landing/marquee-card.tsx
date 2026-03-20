interface MarqueeCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  description: string;
}

export function MarqueeCard({
  icon,
  iconBg,
  title,
  subtitle,
  description,
}: MarqueeCardProps) {
  return (
    <div className="w-72 p-5 rounded-xl border border-zinc-700/50 bg-zinc-800/60 backdrop-blur-sm hover:bg-zinc-800 transition-colors shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`h-8 w-8 rounded-full ${iconBg} flex items-center justify-center text-white`}
        >
          {icon}
        </div>
        <div>
          <div className="text-sm font-medium text-zinc-100">{title}</div>
          <div className="text-xs text-zinc-500">{subtitle}</div>
        </div>
      </div>
      <p className="text-xs text-zinc-400">{description}</p>
    </div>
  );
}
