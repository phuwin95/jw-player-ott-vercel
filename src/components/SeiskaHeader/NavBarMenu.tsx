import { memo } from 'react';
import styld from 'styled-components';

import { HAMBURGER_MENU_ITEMS, breakpoints } from '#src/utils/constants';
import { PageContentStyles } from '#src/utils/common';
import SeiskaLink from '#components/SeiskaLink';

const StyledLayout = styld.div`
  ${PageContentStyles};
  position: relative;
  padding: 0;
  @media (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

const StyledMenuContainer = styld.div<{ isMenuOpen: boolean }>`
  position: absolute;
  bottom: 0;
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1.5rem 2.5rem;
  background-color: ${(props) => props.theme.background};
  transform: ${(props) => (props.isMenuOpen ? 'translateY(100%)' : 'translateY(0%)')};
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.textColor};
  z-index: 3;
  backface-visibility: hidden;
  box-shadow: inset 0px -5px 8px -8px ${({ theme }) => theme.colors.black};
`;

const StyledMenuItem = styld.div`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
`;

const StyledMenuItemTitle = styld.h3`
  margin: 0 0 0.5rem 0;
  padding: 0;
  cursor: default;
  user-select: none;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.6875;
`;

const StyledLinkContainer = styld.menu`
  padding: 0;
  margin: 0;
`;

const StyledMenuItemLink = styld.li`
  list-style: none;
  color: inherit;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

type NavBarMenuProps = {
  isMenuOpen: boolean;
};

const NavBarMenu = ({ isMenuOpen }: NavBarMenuProps) => (
  <StyledLayout>
    <StyledMenuContainer isMenuOpen={isMenuOpen}>
      {HAMBURGER_MENU_ITEMS?.map &&
        HAMBURGER_MENU_ITEMS?.map(({ name, items }) => (
          <StyledMenuItem key={name}>
            <StyledMenuItemTitle>{name}</StyledMenuItemTitle>
            <StyledLinkContainer>
              {items.map((item) => (
                <StyledMenuItemLink key={item.title}>
                  <SeiskaLink href={item.url} color="inherit">
                    {item.title}
                  </SeiskaLink>
                </StyledMenuItemLink>
              ))}
            </StyledLinkContainer>
          </StyledMenuItem>
        ))}
    </StyledMenuContainer>
  </StyledLayout>
);

export default memo(NavBarMenu);
