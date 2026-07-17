import { ImageResponse } from "next/og";

import { imageResponseTokens } from "@/lib/image-response-tokens";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
        border: `2px solid ${imageResponseTokens.color.accent}`,
        borderTopWidth: 6,
        fontFamily: imageResponseTokens.font.body,
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: -1,
      }}
    >
      AT
    </div>,
    size,
  );
}
