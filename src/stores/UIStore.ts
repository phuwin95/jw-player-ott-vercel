import type { Location } from 'react-router-dom';

import { createStore } from './utils';

type UIState = {
  searchQuery: string;
  searchActive: boolean;
  userMenuOpen: boolean;
  languageMenuOpen: boolean;
  preSearchPage?: Location;
  hamburgerMenuOpen: boolean;
};

export const useUIStore = createStore<UIState>('UIStore', () => ({
  searchQuery: '',
  searchActive: false,
  languageMenuOpen: false,
  userMenuOpen: false,
  hamburgerMenuOpen: false,
}));
