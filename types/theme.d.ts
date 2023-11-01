export interface ThemeInterface {
  name: string;
  colors: Colors;
  palette?: {
    [key: string]: PaletteColor;
  };
  katsoPalette?: {
    [key: string]: PaletteColor;
  };
  textBlack?: string;
  textWhite?: string;
  textColor?: string;
  underBackground?: string;
  background?: string;
  fontHeading?: string;
  fontBody?: string;
  fontHeadingKatso?: string;
  katsoBackground?: string;
  boxShadow?: string;
  /**
   * css filters for dark theme images
   */
  filters?: {
    yellowToDarkerYellow?: string;
    redToDarkerRed?: string;
    blackToWhite?: string;
    whiteToDarkerWhite?: string;
    redToDarkerWhite?: string;
    whiteToVideoGray?: string;
  };
}
export type Colors = {
  [key: string]: string;
};

export interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  darkest?: string;
  bgColor?: string;
  underBgColor?: string;
  textColor?: string;
  inverted?: string;
  invertedTextColor?: string;
  adSlotDividersColor?: string;
}

export type Intent = 'primary' | 'secondary' | 'tertiary' | 'info' | 'optional' | 'disabled';
export type Palette = 'palette' | 'katsoPalette';
