import styld from 'styled-components';

import { breakpoints } from '#src/utils/constants';

const StyledMobileNavBarMenu = styld.div<{ isMenuOpen: boolean }>`
  position: absolute;
  top: 56px;
  left: 0;
  transform: ${(props) => (props.isMenuOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${(props) => (props.isMenuOpen ? '1' : '0')};
  pointer-events: ${(props) => (props.isMenuOpen ? 'auto' : 'none')};
  transition: all 0.3s ease-in-out;
  z-index: 2;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  @media (min-width: ${breakpoints.large - 1}px) {
    display: none;
  }
`;
export default StyledMobileNavBarMenu;
