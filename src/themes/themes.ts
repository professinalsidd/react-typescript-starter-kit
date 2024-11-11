import useMediaQuery from "@mui/material/useMediaQuery";

// responsive section for managing screen sizes
export const useResponsive = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");

  return { isMobile, isTablet, isDesktop };
};

export const COLORS = {
  PRIMARY_BLACK: "#101828",
  PRIMARY_GREY: "#475467",
  PRIMARY_RED: "#D92D20",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  GREY: "#D9D9D9",
  LIGHT_GREY: "#F9FAFB",
  AQUA_GREEN: "#D7FFE7",
  MEDIUM_GREY: "#636363",
  BLUE: "#4379EE",
  DARK_GREY: "#8E8E93",
  LIGHT_GREEN: "#BBF0D4",
  GREY_DARK: "#455162",
  DIM_GREY: "#7A7A7A",
  Slate_Gray: "#475467",
  Charcoal: "#191C28",
  Raisin_Black: "#11152C",
  Light_Purple: "#9E7CFF",
  Soft_Purple: "#A679FF",
  Medium_Aquamarine: "#4CCFAF",
  Fuchsia: "#FF5FCC",
  Lavender_Gray: "#D3D8E8",
  DarkRoyalBlue: "linear-gradient(90deg, #040C2D 49.5%, #152360 100%)",
  MediumPurple: "#8A75C7",
  VeryLightWhite: "rgba(255, 255, 255, 0.19)",
  CoolGray: "#CED4DA",
  MediumWhite: "rgba(255, 255, 255, 0.53)",
  VeryPaleLavender: "#E9E4F8",
  MidnightBlue: "#040C2D",
  DarkBlueShade: "#15236080",
  BrightRed: "#DA1E28",
  ForestGreen: "#198038",
  CobaltBlue: "#0043CE",
  MediumBlue: "#152360",
  SemiTransparentWhite: "rgba(255, 255, 255, 0.5)",
  Sandstone: "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 43%, #B39D80 99.5%)",
  Crimson: "linear-gradient(90deg, #000000 0%, #B32020 100%)",
  GRY_RGB: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
  RED_BLACK: "linear-gradient(180deg, #A51515 0%, #000000 100%)",
};

// Layout section for skipped to re use this lines
export const LAYOUT = {
  flexCCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  columnCCenter: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  flexRowBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnStart: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  columnEnd: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  flexRowAround: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexCCenterWithGap: (gap = "0.2rem") => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap,
  }),
  flexColumnWithGap: (gap = "0.2rem") => ({
    display: "flex",
    flexDirection: "column",
    gap,
  }),
  flexRowWithGap: (gap = "0.2rem") => ({
    display: "flex",
    flexDirection: "row",
    gap,
  }),
  flexWrapRowWithGap: (gap = "0.5rem") => ({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap,
  }),
  flexWrap: {
    display: "flex",
    flexWrap: "wrap",
  },
  flexRowAJCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flexColumJCenter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  flexEndCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  AlignCenter: {
    display: "flex",
    alignItems: "center",
  },
  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexJustifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
  flexAlignRowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flexBetweenColumnCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flexWrapRow: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
  },
  flexColumnEnd: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  flexJustifyColumnCenter: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  flexStartCenter: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flexAEndCenter: {
    display: "flex",
    alignItems: "flex-end",
  },
  flexEndBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  flexJAEnd: {
    display: { xs: "none", md: "flex" },
    justifyItems: "flex-end",
    alignItems: "flex-end",
  },
  flexJCenter: {
    display: "flex",
    justifyContent: "center",
  },
  flexColumnBetween: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};
