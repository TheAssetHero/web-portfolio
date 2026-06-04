type VimeoEmbedProps = {
  src: string;
  title: string;
};

export default function VimeoEmbed({ src, title }: VimeoEmbedProps) {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black shadow-[0_0_26px_rgba(255,255,255,0.04)]">
      <div className="relative aspect-video w-full">
        <iframe
          src={src}
          title={title}
          className="h-full w-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
