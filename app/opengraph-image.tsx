import { ImageResponse } from "next/og";
export const alt = "Mark O'Hare | Third Sector Operations and People Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#101211", color: "#f4f4ef", padding: "72px 84px", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", fontSize: 25, letterSpacing: 4, textTransform: "uppercase", color: "#c7ccc7" }}>LEADERSHIP DOSSIER / SCOTLAND</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", fontSize: 112, fontWeight: 400, letterSpacing: -6 }}>Mark O&apos;Hare</div>
        <div style={{ display: "flex", fontSize: 34, color: "#c7ccc7" }}>Third Sector Operations &amp; People Leader</div>
      </div>
      <div style={{ display: "flex", width: "100%", borderTop: "1px solid #626762", paddingTop: 22, fontSize: 22, color: "#c7ccc7" }}>Services · People · Partnerships · Improvement</div>
    </div>, size
  );
}
