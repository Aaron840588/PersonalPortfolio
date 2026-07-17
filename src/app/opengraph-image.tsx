import { ImageResponse } from "next/og";

import { imageResponseTokens } from "@/lib/image-response-tokens";

export const alt = "Aaron Tagapan — Information Systems, operations, and support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const { color, font } = imageResponseTokens;

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
          background: color.paper,
          color: color.ink,
          padding: "58px 64px 52px",
          fontFamily: font.body,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 20,
            borderBottom: `1px solid ${color.rule}`,
            fontSize: 20,
          }}
        >
          <span style={{ fontWeight: 700, letterSpacing: -0.4 }}>Aaron Tagapan</span>
          <span style={{ color: color.muted, fontSize: 16, letterSpacing: 1.4 }}>
            PORTFOLIO / 2026
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 58,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 850 }}>
            <span
              style={{
                marginBottom: 22,
                color: color.accent,
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: 1.6,
              }}
            >
              IT OPERATIONS · SYSTEMS · SUPPORT
            </span>
            <span
              style={{
                fontFamily: font.display,
                fontSize: 70,
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: -2.2,
              }}
            >
              Information Systems graduate focused on operations and support.
            </span>
          </div>

          <div
            style={{
              width: 176,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "18px 20px",
              borderTop: `6px solid ${color.accent}`,
              background: color.paperAlt,
              color: color.inkSoft,
            }}
          >
            <span style={{ marginBottom: 24, fontSize: 13, letterSpacing: 1.2 }}>
              PRACTICE
            </span>
            <span style={{ fontSize: 18, lineHeight: 1.35 }}>
              Operations
              <br />
              Systems
              <br />
              Support
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 18,
            borderTop: `1px solid ${color.rule}`,
            color: color.muted,
            fontSize: 16,
          }}
        >
          <span>Los Baños, Laguna, Philippines</span>
          <span>Experience and two personal projects</span>
        </div>
      </div>
    ),
    size,
  );
}
