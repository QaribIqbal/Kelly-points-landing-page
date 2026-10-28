import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export async function renderShareImage() {
  const logo = await readFile(join(process.cwd(), "src/assets/xally-logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background: "linear-gradient(135deg, #edf7f0 0%, #ffffff 50%, #fff0ec 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, color: "#1d1d1f", lineHeight: 1.05 }}>
            The right card.
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, color: "#c8401f", lineHeight: 1.05 }}>
            Every single time.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#6c6c70" }}>
            Find the credit card with the biggest discount, wherever you are.
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={360} height={288} alt="" />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
