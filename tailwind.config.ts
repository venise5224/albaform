import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      pc: { min: "1200px" },
      tablet: { min: "768px", max: "1199px" },
      mobile: { min: "343px", max: "767px" },
    },
    extend: {
      colors: {
        "background-100": "#fcfcfc",
        "background-200": "#f7f7f7",
        "background-300": "#efefef",
        "line-100": "#f2f2f2",
        "line-200": "#e6e6e6",
        "gray-50": "#ffffff",
        "gray-100": "#DEDEDE",
        "gray-200": "#C4C4C4",
        "gray-300": "#ABABAB",
        "gray-400": "#999999",
        "gray-500": "#808080",
        "black-100": "#6B6B6B",
        "black-200": "#525252",
        "black-300": "#373737",
        "black-400": "#1f1f1f",
        "black-500": "#040404",
        "orange-50": "#FFF7EB",
        "orange-100": "#FCC369",
        "orange-200": "#FBAF37",
        "orange-300": "#F89A05",
        "orange-400": "#E18C05",
        "blue-100": "#535779",
        "blue-200": "#3E415B",
        "blue-300": "#2A2C3D",
        "oldLace-50": "#fff7eb",
        "tuatara-900": "#3e3e3e",
        red: "#fc4100",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
      },
      fontSize: {
        "3xl": ["32px", "42px"],
        "2xl": ["24px", "32px"],
        xl: ["20px", "32px"],
        "2lg": ["18px", "26px"],
        lg: ["16px", "26px"],
        md: ["14px", "24px"],
        sm: ["13px", "22px"],
        xs: ["12px", "18px"],
      },
      gridTemplateAreas: {
        layout: ["box1 box4", "box2 box5", "box3 box6", ". box7"],
      },
      gridArea: {
        box1: "box1",
        box2: "box2",
        box3: "box3",
        box4: "box4",
        box5: "box5",
        box6: "box6",
        box7: "box7",
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"), // grid-area를 사용하기 위한 플러그인
  ],
} satisfies Config;
