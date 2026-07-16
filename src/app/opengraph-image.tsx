import { ImageResponse } from "next/og";

export const alt = "Aaron Tagapan — IT operations, systems, and business technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  paper: "#f7ece2",
  paperAlt: "#ecdfd2",
  ink: "#201513",
  inkSoft: "#3c2f2c",
  muted: "#5d4f4b",
  rule: "#c0b1a4",
  accent: "#782222",
};

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
          background: colors.paper,
          color: colors.ink,
          padding: "58px 64px 52px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 20,
            borderBottom: `1px solid ${colors.rule}`,
            fontSize: 20,
          }}
        >
          <span style={{ fontWeight: 700, letterSpacing: -0.4 }}>Aaron Tagapan</span>
          <span style={{ color: colors.muted, fontSize: 16, letterSpacing: 1.4 }}>
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
                color: colors.accent,
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: 1.6,
              }}
            >
              IT OPERATIONS · SYSTEMS · BUSINESS TECHNOLOGY
            </span>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 70,
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: -2.2,
              }}
            >
              Operational systems, made easier to understand and support.
            </span>
          </div>

          <div
            style={{
              width: 176,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "18px 20px",
              borderTop: `6px solid ${colors.accent}`,
              background: colors.paperAlt,
              color: colors.inkSoft,
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
            borderTop: `1px solid ${colors.rule}`,
            color: colors.muted,
            fontSize: 16,
          }}
        >
          <span>Los Baños, Laguna, Philippines</span>
          <span>Selected systems and operating work</span>
        </div>
      </div>
    ),
    size,
  );
}
