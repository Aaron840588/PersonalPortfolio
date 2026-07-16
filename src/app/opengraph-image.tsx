import { ImageResponse } from "next/og";

export const alt = "Aaron Tagapan — IT Operations, Systems and Business Technology";
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
          background: "#0b0b0c",
          color: "#f5f5f4",
          padding: "70px 76px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 24,
            borderBottom: "1px solid rgba(255,255,255,.12)",
            fontSize: 24,
          }}
        >
          <span style={{ fontWeight: 650 }}>Aaron Tagapan</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#a3a3a3",
              fontSize: 17,
              letterSpacing: 1.2,
            }}
          >
            <span
              style={{ width: 8, height: 8, borderRadius: 999, background: "#d6e89a" }}
            />
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <span
            style={{
              marginBottom: 24,
              color: "#858585",
              fontSize: 20,
              letterSpacing: 1.6,
            }}
          >
            IT OPERATIONS · SYSTEMS · BUSINESS TECHNOLOGY
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: -2.5,
            }}
          >
            Operational systems that are easier to understand and support.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#858585",
            fontSize: 17,
          }}
        >
          <span>Los Baños, Laguna, Philippines</span>
          <span>Portfolio · 2026</span>
        </div>
      </div>
    ),
    size,
  );
}
