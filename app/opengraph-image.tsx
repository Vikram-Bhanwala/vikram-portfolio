import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080807",
          color: "#f4efe6",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#d4af7a" }}>
          <span>VB</span>
          <span>{site.location}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#9a9386", marginBottom: 18 }}>{site.role}</div>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 28, color: "#9a9386", marginTop: 24, maxWidth: 860 }}>
            {site.headline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
