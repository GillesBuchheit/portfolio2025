interface SectionTitleProps {
  preTitle: string;
  title: string;
  postTitle: string;
}

export default function SectionTitle({
  preTitle,
  title,
  postTitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-12 bg-brand"></div>
        <span className="text-xs lg:text-sm font-erstoria tracking-[0.3em] text-[#0A0100]/40 uppercase">
          {preTitle}
        </span>
        <div className="h-px flex-1 bg-linear-to-r from-[#0A0100]/10 to-transparent"></div>
      </div>

      <div className="relative">
        <h2 className="text-5xl lg:text-7xl font-erstoria text-brand mb-3 relative inline-block">
          {title}
          <div className="absolute -bottom-2 left-0 w-24 h-[2px] bg-brand"></div>
          <div className="absolute -bottom-2 left-28 w-12 h-px bg-brand/40"></div>
        </h2>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <p className="text-lg lg:text-2xl font-erstoria text-[#0A0100]/60 tracking-wide">
          {postTitle}
        </p>
      </div>
    </div>
  );
}
