"use client";
import { useState } from "react";

export function GDriveIframe({ src }: { src: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      style={{
        left: 0,
        width: "100%",
        height: 0,
        position: "relative",
        paddingBottom: "100%",
      }}
    >
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--fd-background)",
          }}
        >
          Loading...
        </div>
      )}
      <iframe
        src={src}
        onLoad={() => setIsLoading(false)}
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
