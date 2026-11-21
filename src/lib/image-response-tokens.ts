/**
 * Standalone image responses do not inherit the site's CSS custom properties.
 * Keep their palette and font fallbacks centralized here, mirroring the
 * @theme tokens in src/app/globals.css.
 */
export const imageResponseTokens = {
  color: {
    paper: "#070a12",
    paperAlt: "#111828",
    ink: "#e9edf6",
    inkSoft: "#b9c1d4",
    muted: "#8792ab",
    rule: "#1e2740",
    accent: "#8ab4ff",
    spark: "#ffb35c",
  },
  font: {
    body: "Arial, sans-serif",
    display: "Arial, sans-serif",
  },
} as const;
