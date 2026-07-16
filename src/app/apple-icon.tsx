import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#111113", color: "#f5f5f4", borderTop: "10px solid #d6e89a", borderRadius: 16, fontSize: 65, fontWeight: 650 }}>AT</div>,
    size,
  );
}
