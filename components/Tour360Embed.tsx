type Tour360EmbedProps = {
  src: string;
  title?: string;
  className?: string;
};

export default function Tour360Embed({
  src,
  title = "360 Tour Embed",
  className = "",
}: Tour360EmbedProps) {
  return (
    <div
      className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/70 shadow-[0_0_28px_rgba(255,255,255,0.04)] ${className}`}
    >
      <div className="aspect-video w-full">
        <iframe
          src={src}
          title={title}
          className="h-full w-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; xr-spatial-tracking"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
