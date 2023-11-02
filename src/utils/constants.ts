export const breakpoints = {
  tiny: 350,
  mobile: 576,
  tablet: 768,
  large: 1024,
  xLarge: 1200,
};

type Item = {
  title: string;
  url: string;
  internal?: boolean;
  hideOnCategoryMenu?: boolean;
};

const BASE_URL = 'https://www.seiska.fi';

/**
 * Displayed in the Navigation bar
 */
export const NAVBAR_MENU_ITEMS: Item[] = [
  { title: 'Etusivu', url: BASE_URL + '/', internal: true, hideOnCategoryMenu: true },
  { title: 'Vain Seiskassa', url: BASE_URL + '/vain-seiskassa', internal: true }, // Uutiset
  { title: 'Kotimaa', url: BASE_URL + '/kotimaa', internal: true }, // Uutiset
  { title: 'Ulkomaat', url: BASE_URL + '/ulkomaat', internal: true }, // Oho + HLLWD
  { title: 'Kuninkaalliset', url: BASE_URL + '/kuninkaalliset', internal: true },
  { title: 'Katso', url: BASE_URL + '/katso', internal: true, hideOnCategoryMenu: true },
  { title: 'Rikos', url: BASE_URL + '/rikos', internal: true },
  { title: 'Urheilu', url: BASE_URL + '/urheilu', internal: true },
  { title: 'Terveys', url: BASE_URL + '/terveys', internal: true },
  { title: 'Videot', url: BASE_URL + '/videot', internal: true },
  { title: 'Horoskooppi', url: BASE_URL + '/horoskooppi', internal: true },
  { title: 'Kilpailut', url: BASE_URL + '/kilpailut-ja-matkat', internal: true },
];

/**
 * Displayed inside the hambuger menu
 */
export const KATEGORY_MENU_ITEMS: Item[] = [
  { title: 'Tuoreimmat', url: BASE_URL + '/tuoreimmat', internal: true },
  { title: 'Luetuimmat', url: BASE_URL + '/suosituimmat', internal: true },
  ...NAVBAR_MENU_ITEMS.filter((item) => !item?.hideOnCategoryMenu),
];

export const KATSO_MENU_ITEMS: Item[] = [
  { title: 'Suosituimmat', url: BASE_URL + '/katso/suosituimmat' },
  { title: 'Artikkelit', url: BASE_URL + '/katso/artikkelit' },
  { title: 'Ohjelmatiedot', url: BASE_URL + '/katso/ohjelmisto' },
  { title: 'Katsojaluvut', url: BASE_URL + '/katso/katsojaluvut' },
];

export const SETTING_MENU_ITEMS: Item[] = [
  { title: 'Yhteystiedot', url: BASE_URL + '/yhteystiedot', internal: true },
  { title: 'Kommentoinnin säännöt', url: BASE_URL + '/info/kommentoinnin-saannot/1116080', internal: true },
  {
    title: 'Kilpailun säännöt',
    url: BASE_URL + '/info/arvontojen-ja-kilpailujen-saannot/1116007',
    internal: true,
  },
  { title: 'Tietosuojaseloste', url: 'https://aller.fi/meista/tietosuoja/' },
  { title: 'Kaupallinen yhteistyö', url: BASE_URL + '/kaupallinen-yhteistyo', internal: true },
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
