import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#111113", color: "#f5f5f4", borderTop: "4px solid #d6e89a", borderRadius: 5, fontSize: 23, fontWeight: 650 }}>AT</div>,
    size,
  );
}
