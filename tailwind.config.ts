import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "HalfUnit": "8px",
        "FiveUnits": "80px",
        "SixUnits": "96px",
        "Unit": "16px",
        "OneAndHalfUnits": "24px",
        "FourUnits": "64px",
        "ThreeUnits": "48px",
        "TwoUnits": "32px"
      },
      "borderRadius": {
        "Radius8": "8px",
        "Radius2": "2px",
        "Radius4": "4px",
        "Round": "50%"
      },
      "scale": {
        "XLarge": "192px",
        "Large": "144px",
        "XXLarge": "288px",
        "MaxWidth": "1400px",
        "Small": "48px",
        "Medium": "96px",
        "XSmall": "16px"
      }
    },
  },
  plugins: [],
} satisfies Config;
