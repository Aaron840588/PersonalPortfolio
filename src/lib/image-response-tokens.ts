/**
 * Standalone image responses do not inherit the site's CSS custom properties.
 * Keep their semantic palette and font fallbacks centralized here instead of
 * improvising values inside each metadata-image component.
 */
export const imageResponseTokens = {
  color: {
    paper: "#f7ece2",
    paperAlt: "#ecdfd2",
    ink: "#201513",
    inkSoft: "#3c2f2c",
    muted: "#5d4f4b",
    rule: "#c0b1a4",
    accent: "#782222",
  },
  font: {
    body: "Arial, sans-serif",
    display: "Georgia, serif",
  },
} as const;
