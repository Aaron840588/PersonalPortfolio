import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7ece2",
        color: "#201513",
        border: "5px solid #782222",
        borderTopWidth: 16,
        fontFamily: "Arial, sans-serif",
        fontSize: 60,
        fontWeight: 700,
        letterSpacing: -3,
      }}
    >
      AT
    </div>,
    size,
  );
}
