import React, { memo, useEffect } from 'react';
import styld from 'styled-components';

import { breakpoints, NAVBAR_MENU_ITEMS } from '#src/utils/constants';
import { PageContentStyles } from '#src/utils/common';
import SeiskaLink from '#components/SeiskaLink';

const StyledMenuWrapper = styld.div`
  display: flex;
  transition: opacity 0.3s ease-in-out;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.palette?.secondary.main};
  color: ${({ theme }) => theme.palette?.secondary.textColor};
  z-index: 5; // to make sure the NavBar is on top of nav menu
  @media (max-width: ${breakpoints.mobile - 1}px) {
    z-index: 2;
  }
`;

const StyleContent = styld.nav`
  ${PageContentStyles};
  @media (max-width: ${breakpoints.large - 1}px) {
    overflow-x: auto;
    // make scroll smooth ease out
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* Edge */
    scrollbar-width: none; /* Firefox */
    /* Hide the scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const StyledLinkList = styld.ul`
  /* padding-left: 0; */
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${({ theme }) => theme.fontBody};
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  @media (max-width: ${breakpoints.large - 1}px) {
    margin: 0 auto;
  }
`;

const StyledItem = styld.li`
  flex: 1;
`;

const StyledLink = styld(SeiskaLink)`
  width: 100%;
  text-decoration: none;
  display: grid;
  place-items: center;
  white-space: nowrap;
  height: 44px;
  line-height: 1.4;
  cursor: pointer;
  color: ${({ theme }) => theme.palette?.primary.textColor};
  transition: background-color 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95),
    color 0.1s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  &:is([data-activemenu='true']) {
    background-color: ${({ theme }) => theme.palette?.primary.main};
    color: ${({ theme }) => theme.textWhite};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverGray};
    color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: ${breakpoints.large - 1}px) {
    font-size: 0.75rem;
    padding: 0 6px;
  }
  @media (min-width: ${breakpoints.large}px) {
    padding: 0 8px;
  }
  @media (min-width: ${breakpoints.xLarge}px) {
    padding: 0 10px;
  }
`;

const NavBar = ({ id = 'mainMenu' }: { id?: string }) => {
  useEffect(() => {
    const activeMenu = document.querySelector(`a[data-activemenu="true"]`);
    if (!activeMenu) return;

    activeMenu?.scrollIntoView?.({
      // @ts-ignore - 'instant' is not a valid value for behavior in TS 4.8.3
      behavior: 'instant',
      block: 'center',
      inline: 'center',
    });
  }, []);

  return (
    <StyledMenuWrapper id={id}>
      <StyleContent>
        <StyledLinkList>
          {NAVBAR_MENU_ITEMS.map((item) => (
            <StyledItem key={item.title}>
              {/* <Link href={item.url} passHref> */}
              <StyledLink data-activemenu={item.title === 'Videot'} key={item.title} href={item.url}>
                {item.title}
              </StyledLink>
              {/* </Link> */}
            </StyledItem>
          ))}
        </StyledLinkList>
      </StyleContent>
    </StyledMenuWrapper>
  );
};

export default memo(NavBar);
