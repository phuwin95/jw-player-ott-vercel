export const breakpoints = {
  tiny: 350,
  mobile: 576,
  tablet: 768,
  large: 992,
  xLarge: 1200,
};

export const ARTICLE_PADDING_MOBILE_SCREEN = 20; // PX
export const ARTICLE_PADDING_MOBILE_SCREEN_KATSO = 15; // PX

type Item = {
  title: string;
  url: string;
  internal?: boolean;
  hideOnCategoryMenu?: boolean;
};

/**
 * Displayed in the Navigation bar
 */
export const NAVBAR_MENU_ITEMS: Item[] = [
  { title: 'Etusivu', url: '/', internal: true, hideOnCategoryMenu: true },
  { title: 'Kotimaa', url: '/kotimaa', internal: true }, // Uutiset
  { title: 'Ulkomaat', url: '/ulkomaat', internal: true }, // Oho + HLLWD
  { title: 'Kuninkaalliset', url: '/kuninkaalliset', internal: true },
  { title: 'Katso', url: '/katso', internal: true, hideOnCategoryMenu: true },
  { title: 'Rikos', url: '/rikos', internal: true },
  { title: 'Urheilu', url: '/urheilu', internal: true },
  { title: 'Terveys', url: '/terveys', internal: true },
  { title: 'Videot', url: '/videot', internal: true },
  { title: 'Horoskooppi', url: '/horoskooppi', internal: true },
  { title: 'Kilpailut', url: '/kilpailut-ja-matkat', internal: true },
];

/**
 * Displayed inside the hambuger menu
 */
export const KATEGORY_MENU_ITEMS: Item[] = [
  { title: 'Tuoreimmat', url: '/tuoreimmat', internal: true },
  { title: 'Luetuimmat', url: '/suosituimmat', internal: true },
  ...NAVBAR_MENU_ITEMS.filter((item) => !item?.hideOnCategoryMenu),
];

export const KATSO_MENU_ITEMS: Item[] = [
  { title: 'Suosituimmat', url: '/katso/suosituimmat' },
  { title: 'Artikkelit', url: '/katso/artikkelit' },
  { title: 'Ohjelmatiedot', url: '/katso/ohjelmisto' },
  { title: 'Katsojaluvut', url: '/katso/katsojaluvut' },
];

export const SETTING_MENU_ITEMS: Item[] = [
  { title: 'Yhteystiedot', url: '/yhteystiedot', internal: true },
  { title: 'Kommentoinnin säännöt', url: '/info/kommentoinnin-saannot/1116080', internal: true },
  { title: 'Tietosuojaseloste', url: 'https://aller.fi/meista/tietosuoja/' },
  { title: 'Kaupallinen yhteistyö', url: '/kaupallinen-yhteistyo', internal: true },
];

export const HAMBURGER_MENU_ITEMS = [
  {
    name: 'Kategoriat',
    items: KATEGORY_MENU_ITEMS,
  },
  {
    name: 'Katso',
    items: KATSO_MENU_ITEMS,
  },
  {
    name: 'Muu',
    items: SETTING_MENU_ITEMS,
  },
];

export const ADMIN_ITEMS = [
  {
    label: 'Back to CMS',
    href: '/admin/',
    class: 'button',
    target: '_blank',
    testId: 'back-to-cms',
  },
  {
    label: 'All Content',
    href: '/admin/content',
    class: '',
    target: '_blank',
    testId: 'all-content',
  },
  {
    label: 'Add content',
    href: '/node/add',
    class: '',
    target: '_blank',
    testId: 'add-content',
  },
];

export enum ScheduleMode {
  NOW = 'now',
  ALL = 'all',
  REST = 'rest',
}

export const KATSO_SCHEDULE_MODE_OPTIONS = [
  {
    title: 'TV:ssä juuri nyt',
    mode: ScheduleMode.NOW,
  },
  {
    title: 'Päivän ohjelmat',
    mode: ScheduleMode.ALL,
  },
  {
    title: 'Näytä Loppupäivä',
    mode: ScheduleMode.REST,
  },
];

export const JWPlayer = {
  playerID: 'wRrEuXAq',
  playerScript: 'https://videot.seiska.fi/libraries/wRrEuXAq.js',
  domain: 'https://videot.seiska.fi',
};

// https://html.spec.whatwg.org/multipage/syntax.html#void-elements
export const SELF_CLOSING_TAGS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wb', 'script'];

export const sessionCookieAttributes = {
  path: '/',
  maxAge: 24 * 60 * 60, // 24 hours, in seconds
  sameSite: 'lax',
};

export const allowedMimeTypes = {
  default: {
    mimeTypes: ['image/jpeg', 'image/gif', 'image/png'],
    extensions: ['.jpg', '.jpeg', '.jpe', '.gif', '.png'],
  },
  userTips: {
    mimeTypes: [
      'image/jpeg',
      'image/gif',
      'image/png',
      'image/bmp',
      'video/webm',
      'video/ogg',
      'video/x-msvideo',
      'video/quicktime',
      'video/mpeg',
      'video/3gpp',
      'video/3gpp2',
    ],
    extensions: [
      '.png',
      '.gif',
      '.jpg',
      '.jpeg',
      '.jpe',
      '.bmp',
      '.webm',
      '.ogg',
      '.ogv',
      '.ogx',
      '.avi',
      '.mov',
      '.mp4',
      '.m4v',
      '.mp2',
      '.mpv',
      '.mpg',
      '.mpeg',
      '.3gp',
      '.3g2',
    ],
  },
};

export const FINNPANEL_CHANNELS = [
  { channel: 'yle1', title: 'Yle TV1' },
  { channel: 'yle2', title: 'Yle TV2' },
  { channel: 'mtv3', title: 'MTV3' },
  { channel: 'nelonen', title: 'Nelonen' },
  { channel: 'subtv', title: 'Sub' },
  { channel: 'teemafem', title: 'Yle Teema&Fem' },
  { channel: 'jim', title: 'Jim' },
  { channel: 'paramount', title: 'Paramount Network' },
  { channel: 'liv', title: 'LIV' },
  { channel: 'viisi', title: 'TV5' },
  { channel: 'hero', title: 'Hero' },
  { channel: 'fox', title: 'Star Channel' },
  { channel: 'discovery', title: 'The Discovery Channel' },
  { channel: 'kutonen', title: 'Kutonen' },
  { channel: 'frii', title: 'Frii' },
  { channel: 'tlc', title: 'TLC' },
  { channel: 'ngc', title: 'National Geographic' },
  { channel: 'ava', title: 'AVA' },
];
