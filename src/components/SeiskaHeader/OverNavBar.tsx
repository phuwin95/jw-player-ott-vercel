import React from 'react';
import styld from 'styled-components';

import SeiskaLogo from './SeiskaLogo';

import { breakpoints } from '#src/utils/constants';
import Button from '#components/SeiskaButton';
import { PageContentStyles } from '#src/utils/common';
import MenuOpen from '#src/assets/icons/burger-menu-open.svg';
import MenuClose from '#src/assets/icons/burger-menu-close.svg';
import Search from '#src/assets/icons/search.svg';

const StyledPageWrapper = styld.div`
  background-color: ${({ theme }) => theme.background};
`;

const StyledContainer = styld.div`
  ${PageContentStyles};
  position: relative;
  display: flex;
  min-height: 80px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
  z-index: 5;
  background-color: ${({ theme }) => theme.background};
  @media (max-width: ${breakpoints.mobile}px) {
    min-height: 58px;
  }
`;

const StyledButtonGroups = styld.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styld(Button)`
  max-height: 42px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontBody};
  margin-right: 6px;
  border: none;
  border-radius: 5px;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 0.75rem;
  }
  @media (min-width: ${breakpoints.large}px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
    :last-of-type {
      margin-right: 45px;
    }
  }
`;

export const StyledIconWrapper = styld.button`
  cursor: pointer;
  border: 0;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  outline: none;
  margin-left: 0.5rem;
`;

const getBackground = ($isMenuOpen: boolean) => {
  const icon = $isMenuOpen ? MenuOpen : MenuClose;
  return `background: url(${icon}) no-repeat center center;`;
};

export const StyledMenuIcon = styld.span<{ $isMenuOpen: boolean }>`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background-size: 100% 100%;
  ${({ $isMenuOpen }) => getBackground($isMenuOpen)};
  transition: all 0.2s;
  ${({ theme }) => theme.filters?.blackToWhite};
`;

// https://github.com/allermedia/fi-seiska-front/pull/2252
const StyledSearchIcon = styld.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  content: '';
  background-size: 100% 100%;
  position: relative;
  top: 2px;
  background: url(${Search}) no-repeat center center;
  transition: all 0.2s;
  ${({ theme }) => theme.filters?.blackToWhite};
`;

type OverNavBarProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const OverNavBar = ({ isMenuOpen, toggleMenu }: OverNavBarProps) => {
  const onMenuToggle = () => {
    toggleMenu();
  };
  return (
    <StyledPageWrapper id="over-nav-bar">
      <StyledContainer>
        <SeiskaLogo />
        <StyledButtonGroups>
          <>
            <StyledButton intent="primary" type="link" size="large" href="https://www.seiska.fi/button">
              Tilaa Lehti
            </StyledButton>
            <StyledButton intent="green" type="link" size="large" testId="user_tips" href="https://www.seiska.fi/contact/user_tips">
              Vinkkaa ja tienaa
            </StyledButton>
            <StyledButton intent="blue" type="link" size="large" border="1px solid" href="https://www.seiska.fi/verkkolehti">
              Digilehti
            </StyledButton>
          </>

          <StyledIconWrapper
            type="button"
            aria-controls="search"
            aria-expanded="false"
            aria-label="Toggle Search"
            onClick={() => {
              window.location.href = 'https://www.seiska.fi/haku';
            }}
            data-testid="searchToggle"
          >
            <StyledSearchIcon />
          </StyledIconWrapper>

          <StyledIconWrapper
            type="button"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={onMenuToggle}
            data-testid="menuToggle"
          >
            <StyledMenuIcon $isMenuOpen={isMenuOpen} />
          </StyledIconWrapper>
        </StyledButtonGroups>
      </StyledContainer>
    </StyledPageWrapper>
  );
};
export default React.memo(OverNavBar);