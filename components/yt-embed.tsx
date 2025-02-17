export function YTEmbed({ src }: { src: string }) {
  return (
    <div className="relative h-0 w-full pb-[56.25%] my-4 md:my-8">
      <iframe
        className="absolute left-0 top-0 h-full w-full rounded-md"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
