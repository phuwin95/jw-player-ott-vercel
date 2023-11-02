import React, { memo, useState } from 'react';
import styld from 'styled-components';

import NavBar from './NavBar';
import NavBarMenu from './NavBarMenu';
import OverNavBar from './OverNavBar';

import { breakpoints } from '#src/utils/constants';

const StyledSeiskaHeader = styld.div`
  z-index: 5;
  flex-direction: column;
  transition: transform 200ms linear;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  display: none;
  @media (min-width: ${breakpoints.large}px) {
    display: flex;
  }
`;

export type HeaderProps = {
  /**
   * add padding top to the header when admin nav shows
   */
  withAdminNav?: boolean;
  /**
   * isGrayOut used in Katso pages
   */
  isGrayOut?: boolean;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledSeiskaHeader>
      <OverNavBar toggleMenu={toggleMenu} />
      <NavBar />
      <NavBarMenu isMenuOpen={isMenuOpen} />
    </StyledSeiskaHeader>
  );
};

export default memo(Header);
