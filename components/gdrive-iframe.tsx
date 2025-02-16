export function GDriveIframe({ src }: { src: string }) {
  return (
    <div
      style={{
        left: 0,
        width: "100%",
        height: 0,
        position: "relative",
        paddingBottom: "129.4118%",
      }}
    >
      <iframe
        src={src}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          border: 0,
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
