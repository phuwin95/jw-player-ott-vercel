// import original module declarations
import 'styled-components';

import { ThemeInterface } from './theme';

/**
 * This file is for styled-components theme props declaration
 * More info here https://styled-components.com/docs/api#create-a-declarations-file
 */
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeInterface {}
}
