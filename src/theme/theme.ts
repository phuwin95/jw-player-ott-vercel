import type { Colors, ThemeInterface } from '#types/theme';

const colors: Colors = {
  seiskaRed: '#EC1C24',
  seiskaRedDarker: '#C51117',
  seiskaYellow: '#FFED00',
  seiskaYellowDarker: '#CCB600',
  seiskaBlue: '#00ACED',
  seiskaBlueDarker: '#0096CC',
  seiskaLink: '#336699',
  seiskaGray: '#F2F2F2',
  seiskaGreen: '#2EBA43',
  seiskaGreenDarker: '#29a33b',

  katsoViolet: '#331B6E',
  katsoTeal: '#418B8C',
  katsoRed: '#F15B4E',
  katsoBlue: '#005A96',
  katsoChartreuse: '#A6B622',
  katsoSheerwhite: '#F9F9F9',
  katsoMaroon: '#C02640',
  katsoLightGray: '#EEE',
  katsoDarkGray: '#333',

  backgroundGray: '#EFEFEF',
  backgroundDarkGray: '#E1E1E1',
  backgroundDarkerGray: '#D4D4D4',
  videoBlack: '#111111',
  black: '#000000',
  darkestGray: '#222222',
  videoGray: '#555555',
  hoverGray: '#888888',
  placeholderGray: '#d3d3d3',
  white: '#FFFFFF',

  nativeGreen: '#BAD1A7',
};

const darkColors: Colors = {
  ...colors,
  seiskaRed: '#DC5A54',
  seiskaYellow: '#C1B839',
  seiskaGreen: '#49AC58',
  seiskaBlue: '#3389AA',

  white: '#1E1E1E',
  backgroundGray: '#131313',
  placeholderGray: '#131313',
  black: '#DEDEDE',
  seiskaLink: '#336699',
  katsoSheerwhite: '#131313',
  katsoLightGray: '#3C3C3C',

  darkestGray: '#a4a4a4',
  videoGray: '#555555',
  hoverGray: '#888888',

  katsoViolet: '#7D68B1',
  katsoTeal: '#418B8C',

  nativeGreen: '#768966',
};

export const theme: ThemeInterface = {
  name: 'theme',
  colors,

  textBlack: '#212529',
  textWhite: '#FFFFFF',

  textColor: colors.black,

  underBackground: colors.backgroundGray,
  background: colors.white,
  katsoBackground: colors.katsoSheerwhite,
  boxShadow: '0px 4px 4px rgb(0 0 0 / 5%)',

  palette: {
    /** red */
    primary: {
      main: colors.seiskaRed,
      dark: colors.seiskaRedDarker,
      bgColor: colors.white,
      underBgColor: colors.backgroundGray,
      adSlotDividersColor: colors.placeholderGray,
      textColor: colors.black,
    },
    cardPrimary: {
      main: colors.seiskaRed,
      dark: colors.seiskaRedDarker,
      bgColor: colors.white,
      underBgColor: colors.backgroundGray,
      adSlotDividersColor: colors.placeholderGray,
      textColor: colors.black,
    },
    /** yellow */
    secondary: {
      main: colors.seiskaYellow,
      dark: colors.seiskaYellowDarker,
      bgColor: colors.backgroundGray,
      underBgColor: colors.darkestGray,
      textColor: colors.white,
      inverted: colors.seiskaRed,
      invertedTextColor: colors.white,
    },
    /** green */
    tertiary: {
      main: colors.seiskaGreen,
      dark: colors.seiskaGreenDarker,
      bgColor: colors.darkestGray,
      underBgColor: colors.black,
      textColor: colors.white,
    },
    /** blue */
    optional: {
      main: colors.seiskaBlue,
      dark: colors.seiskaBlueDarker,
      darkest: colors.seiskaLink,
      bgColor: colors.black,
      textColor: colors.white,
    },
    disabled: {
      main: colors.white,
      bgColor: colors.backgroundDarkerGray,
    },
    videot: {
      main: colors.seiskaYellow,
      light: colors.seiskaYellow,
      darkest: colors.seiskaLink,
      bgColor: colors.black,
      underBgColor: colors.darkestGray,
      textColor: colors.white,
    },
  },
  katsoPalette: {
    /** violet */
    primary: {
      main: colors.katsoViolet,
      textColor: colors.white,
      inverted: colors.katsoTeal,
      invertedTextColor: colors.white,
      underBgColor: colors.katsoSheerwhite,
    },
    /** teal */
    secondary: {
      main: colors.katsoTeal,
      textColor: colors.white,
    },
    /** red */
    tertiary: {
      main: colors.katsoRed,
      textColor: colors.white,
    },
    /** blue */
    info: {
      main: colors.katsoBlue,
      textColor: colors.white,
    },
    /** chartreuse */
    optional: {
      main: colors.katsoChartreuse,
      textColor: colors.white,
    },
    gray: {
      main: colors.videoGray,
      bgColor: colors.katsoSheerwhite,
      underBgColor: colors.katsoLightGray,
      textColor: colors.white,
      invertedTextColor: colors.katsoDarkGray,
    },
  },

  fontHeading: '"Open Sans", sans-serif',
  fontBody: '"Open Sans", sans-serif',

  fontHeadingKatso: '"Lora", sans-serif',
  filters: {
    whiteToVideoGray: 'filter: brightness(0) invert(1) brightness(0.295);',
  },
};

export const darkTheme: ThemeInterface = {
  ...theme,
  colors: darkColors,
  name: 'darkTheme',
  textColor: darkColors.black,

  underBackground: darkColors.backgroundGray,
  background: darkColors.white,

  textWhite: darkColors.black,
  textBlack: darkColors.white,
  katsoBackground: darkColors.katsoSheerwhite,
  boxShadow: ' 0px 4px 4px rgb(0 0 0)',

  palette: {
    ...theme.palette,
    primary: {
      main: darkColors.seiskaRed,
      dark: colors.seiskaRedDarker,
      bgColor: darkColors.white,
      underBgColor: darkColors.backgroundGray,
      adSlotDividersColor: darkColors.black,
      textColor: darkColors.white,
    },
    cardPrimary: {
      main: darkColors.seiskaRed,
      textColor: darkColors.black,
      bgColor: darkColors.white,
    },
    secondary: {
      main: darkColors.seiskaYellow,
      dark: colors.seiskaYellowDarker,
      bgColor: darkColors.backgroundGray,
      underBgColor: colors.darkestGray,
      textColor: darkColors.white,
      inverted: darkColors.seiskaRed,
      invertedTextColor: darkColors.black,
    },
    tertiary: {
      main: darkColors.seiskaGreen,
      dark: colors.seiskaGreenDarker,
      bgColor: darkColors.darkestGray,
      underBgColor: darkColors.black,
      textColor: darkColors.white,
    },
    /** blue */
    optional: {
      main: darkColors.seiskaBlue,
      dark: colors.seiskaBlueDarker,
      darkest: darkColors.seiskaLink,
      bgColor: darkColors.black,
      textColor: darkColors.white,
    },
    disabled: {
      main: colors.white,
      bgColor: colors.backgroundDarkerGray,
    },
    videot: {
      main: darkColors.seiskaYellow,
      light: colors.seiskaYellow,
      darkest: colors.seiskaLink,
      bgColor: colors.black,
      textColor: colors.white,
      underBgColor: colors.darkestGray,
    },
  },
  katsoPalette: {
    ...theme.katsoPalette,
    primary: {
      ...theme.katsoPalette?.primary,
      main: darkColors.katsoViolet,
      underBgColor: darkColors.katsoSheerwhite,
      textColor: darkColors.white,
    },
    secondary: {
      main: colors.katsoTeal,
      textColor: darkColors.white,
    },
    gray: {
      main: darkColors.videoGray,
      bgColor: colors.darkestGray, // even
      underBgColor: darkColors.katsoLightGray, // darkColors.hoverGray, // odd
      textColor: darkColors.white,
      invertedTextColor: darkColors.black,
    },
  },
  filters: {
    redToDarkerRed: 'filter: saturate(0.54) brightness(1.3);',
    blackToWhite: 'filter: invert(1) brightness(0.805);',
    yellowToDarkerYellow: 'filter: hue-rotate(1deg) saturate(0.825) brightness(0.75);',
    whiteToDarkerWhite: 'filter: brightness(0.805);',
    redToDarkerWhite: 'filter: brightness(0) invert(1) brightness(0.805);',
    whiteToVideoGray: 'filter: brightness(0.345);',
  },
};
