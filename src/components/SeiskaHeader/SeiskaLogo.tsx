import React, { memo } from 'react';
import styld from 'styled-components';

import { breakpoints } from '#src/utils/constants';
import SeiskaLink from '#components/SeiskaLink';

const StyledLogoLink = styld(SeiskaLink)`
  text-decoration: none;
  z-index: 2;
  display: flex;
  @media (max-width: ${breakpoints.tablet}px) {
    max-width: 135px;
  }
  img {
    ${({ theme }) => theme.name === 'darkTheme' && theme.filters?.redToDarkerRed};
  }
`;

const StyledPathBackground = styld.path`
  fill: none;
`;

const StyledPathForeground = styld.path`
  fill: ${({ theme }) => theme.colors.seiskaRed};
`;

const StyledSvg = styld.svg<{ isGrayOut?: boolean; isMenuOpen?: boolean }>`
  height: ${({ isGrayOut }) => (isGrayOut ? '44px' : '58px')};
  @media (max-width: ${breakpoints.tablet}px) {
    height: 38px;
  }
  ${StyledPathForeground} {
    ${({ isGrayOut, isMenuOpen }) => isGrayOut && !isMenuOpen && `fill: #fff;`};
    @media (max-width: ${breakpoints.mobile}px) {
      ${({ isMenuOpen, theme }) => isMenuOpen && `fill: ${theme.textWhite};`};
    }
  }
`;

const SeiskaLogo = ({ isGrayOut, isMenuOpen }: { isGrayOut?: boolean; isMenuOpen?: boolean }) => (
  <StyledLogoLink href="https://www.seiska.fi">
    <StyledSvg isGrayOut={isGrayOut} isMenuOpen={isMenuOpen} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1156.03 315.95">
      <title id="logo-seiska">Seiskan logo</title>
      <desc id="logo-seiska-desc">Seiskan logo</desc>
      <StyledPathBackground d="M983.46,229.37a38,38,0,0,0,20.55-6c6.2-3.92,9.69-8.58,10.69-14.24l2-11.12c-15.46.17-27.36,2-35.41,5.37s-12.59,7.89-13.55,13.34c-.65,3.69-.16,6.45,1.5,8.43C971.54,228,976.33,229.37,983.46,229.37Z" />
      <StyledPathBackground d="M394,149.64c-3.48-4.33-9-6.44-16.79-6.44-17,0-28,7.42-33.4,22.66h53.64C398.36,159.08,397.2,153.63,394,149.64Z" />
      <StyledPathForeground d="M254.7,69.62h0C239.33,58.74,218,53.23,191.37,53.23c-27,0-50.57,5.47-70.14,16.27-19.83,10.94-31.94,28.2-36,51.28-2.8,15.87-.72,28.68,6.19,38.08a57.31,57.31,0,0,0,26.26,20c10.33,3.91,23.77,7.71,40,11.32,13.09,2.76,22.52,5.38,28,7.81,6.31,2.79,6.44,6.5,6,9.06-.85,4.83-3.73,7.94-8.81,9.51-5.59,1.73-12.56,2.61-20.7,2.61-10.9,0-18.66-1.63-23.06-4.85-4.09-3-5.31-9.34-3.63-18.86a2,2,0,0,0-.44-1.64,2,2,0,0,0-1.53-.71H70.85a2,2,0,0,0-2,1.65c-5,28.08,1,48,17.57,59.22,16.23,11,40.89,16.52,73.3,16.52,27.82,0,51.46-6.05,70.24-18,19-12,30.8-30.74,35.18-55.59,2.41-14.88.18-26.89-6.65-35.7a57,57,0,0,0-25.71-18.77c-10.06-3.71-23.28-7.31-39.3-10.72-13.49-2.75-23.25-5.43-29-8-6.68-2.92-6.8-7-6.3-9.8.55-3.12,3.12-5.86,7.66-8.15,4.84-2.44,11.57-3.68,20-3.68s14.27,1.8,17.55,5.35,4.4,7.89,3.45,13.27l-.21,1.2a2,2,0,0,0,.43,1.63,2,2,0,0,0,1.54.72h62a2,2,0,0,0,2-1.65l.64-3.64C276.62,97.36,270.39,80.73,254.7,69.62Z" />
      <StyledPathForeground d="M445.73,122.15c-13.22-13.93-34.82-21-64.21-21-28.08,0-51.7,7.19-70.22,21.38s-30.44,35.41-35.3,63c-5,28.31-.32,49.82,13.87,63.92s36.32,21.1,66.09,21.1c28.22,0,51-5.55,67.75-16.5s26.45-24.11,29.91-43.76a2,2,0,0,0-.43-1.63,2,2,0,0,0-1.54-.72H393.84a2,2,0,0,0-2,1.66c-1.15,6.53-3.43,9.12-8.5,13s-12.42,5.88-21.9,5.88c-10.25,0-17.3-2.64-21-7.84-3.54-5-4.56-12.64-3-22.61H454.41a2,2,0,0,0,2-1.65l1.8-10.19C463.2,157.7,459,136.15,445.73,122.15ZM343.81,165.86c5.43-15.24,16.38-22.66,33.4-22.66,7.82,0,13.31,2.11,16.79,6.44,3.2,4,4.36,9.44,3.45,16.22Z" />
      <StyledPathForeground d="M550.46,105.47a2,2,0,0,0-1.53-.72H489.32a2,2,0,0,0-2,1.65L459.46,264.57a2,2,0,0,0,.44,1.63,2,2,0,0,0,1.53.72H521a2,2,0,0,0,2-1.66L550.9,107.1A2,2,0,0,0,550.46,105.47Z" />
      <StyledPathForeground d="M492.59,90.18H552.2a2,2,0,0,0,2-1.65l7.13-40.44a2,2,0,0,0-.43-1.64,2,2,0,0,0-1.54-.71H499.72a2,2,0,0,0-2,1.65l-7.13,40.44a2,2,0,0,0,.44,1.63A2,2,0,0,0,492.59,90.18Z" />
      <StyledPathForeground d="M682.67,167.29a245.37,245.37,0,0,0-34.07-7.1c-10.92-1.77-18.78-3.46-23.34-5-4.82-1.63-5.06-4-4.73-5.84,1-5.67,8.19-8.54,21.39-8.54,5,0,9,.91,11.9,2.7l.15.09c4,2,5.42,5.22,4.55,10.14a2,2,0,0,0,.44,1.64,2,2,0,0,0,1.53.71h55.42a2,2,0,0,0,2-1.65c3.2-18.17-2.23-31.81-16.14-40.54h0c-13.48-8.45-31.19-12.73-52.64-12.73-23.77,0-44.1,4.2-60.43,12.5-16.64,8.45-26.86,22.84-30.37,42.77-2.21,12.54-.3,22.51,5.68,29.64a47.73,47.73,0,0,0,22.22,14.85,254,254,0,0,0,33.8,7.85c11.26,2,19.37,3.86,24.11,5.6,5.09,1.88,5.34,4.44,5,6.46-1.17,6.66-9.57,10-25,10a33.2,33.2,0,0,1-15.87-3.8c-4.23-2.28-5.87-6.26-5-12.12l.21-1.2a2,2,0,0,0-.44-1.63,2,2,0,0,0-1.53-.72H546.09a2,2,0,0,0-2,1.66c-2.31,13.1-.1,24.11,6.58,32.72s16,14.8,28,18.8a123.91,123.91,0,0,0,39.14,5.94c24.57,0,45.55-4.41,62.35-13.1,17.1-8.85,27.62-23.84,31.28-44.57,2.28-12.93.32-23.21-5.83-30.54A47.33,47.33,0,0,0,682.67,167.29Z" />
      <StyledPathForeground d="M857.82,171.05l68.58-62.82a2,2,0,0,0-1.35-3.48H855.56a2,2,0,0,0-1.41.58l-56.83,56.1,20-113.64a2,2,0,0,0-.44-1.64,2,2,0,0,0-1.53-.71H755.78a2,2,0,0,0-2,1.65L715.46,264.57a2,2,0,0,0,.44,1.63,2,2,0,0,0,1.53.72H777a2,2,0,0,0,2-1.66l5.9-33.42,21.59-17.91,22.63,51.79a2,2,0,0,0,1.83,1.2h67.7a2,2,0,0,0,1.69-.92,2,2,0,0,0,.13-1.92Z" />
      <StyledPathForeground d="M1071.14,113.57c-14-8.24-33.48-12.41-57.89-12.41-26.78,0-48.5,4.52-64.55,13.43-16.31,9-26,21.52-28.71,37a24.42,24.42,0,0,0-.46,4.59,2,2,0,0,0,2,2h58.72a2,2,0,0,0,2-1.66l.21-1.19c.73-4.14,3.16-7.08,7.44-9a38.25,38.25,0,0,1,15.78-3.12c6.27,0,11.14,1.45,14.48,4.31,3.18,2.73,4.26,6.72,3.29,12.22l-1.08,6.13c-24.42.07-44.8,1.59-60.59,4.53-16.37,3-29.71,8.78-39.64,17.05s-16.54,20.61-19.33,36.39c-2.42,13.76-.36,24.66,6.14,32.4,8,9.48,22.66,14.28,43.73,14.28,12.59,0,25.6,0,36-3.71a101.49,101.49,0,0,0,21.5-10.37l-1.23,8.14a2,2,0,0,0,.43,1.63,2,2,0,0,0,1.54.72h55.64a2,2,0,0,0,2-1.66l4.68-26.55c1.08-5.85,2.37-13.06,3.91-22q1.44-8.31,2.7-15.47l6.34-36h0c1.21-6.78,1.83-10.18,1.84-10.26C1091.26,136,1085.62,122.08,1071.14,113.57ZM1004,223.39a38,38,0,0,1-20.55,6c-7.13,0-11.92-1.41-14.26-4.2-1.66-2-2.15-4.74-1.5-8.43,1-5.45,5.52-9.94,13.55-13.34s20-5.2,35.41-5.37l-2,11.12C1013.7,214.81,1010.21,219.47,1004,223.39Z" />
    </StyledSvg>
  </StyledLogoLink>
);

export default memo(SeiskaLogo);
