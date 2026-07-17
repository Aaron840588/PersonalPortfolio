import { ImageResponse } from "next/og";

import { imageResponseTokens } from "@/lib/image-response-tokens";

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
        background: imageResponseTokens.color.paper,
        color: imageResponseTokens.color.ink,
        border: `5px solid ${imageResponseTokens.color.accent}`,
        borderTopWidth: 16,
        fontFamily: imageResponseTokens.font.body,
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
