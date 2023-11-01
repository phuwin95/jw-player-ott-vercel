import React from 'react';
import styld from 'styled-components';

import Button, { ButtonProps } from '../SeiskaButton';

import MobileMenuItem from './MobileMenuItem';
import CollapsibleItem from './CollapsibleItem';

import { KATEGORY_MENU_ITEMS, KATSO_MENU_ITEMS, SETTING_MENU_ITEMS } from '#src/utils/constants';

const StyledContainer = styld.div`
  background-color: ${({ theme }) => theme.background};
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: 5px;
`;

const StyledList = styld.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: calc(100% - 170px);
  overflow-y: auto;
  ${({ theme }) =>
    `
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 30px;
      top: 3px;
      pointer-events: none;
      background: linear-gradient(180deg, ${theme.background} 0%, rgba(0,0,0,0) 100%);
    }`}
  ${({ theme }) =>
    `
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 90px;
      bottom: 170px;
      background: linear-gradient(0deg, ${theme.background} 0%, rgba(0,0,0,0) 100%);
      pointer-events: none;
      // transform: rotate(180deg);
    }`}
`;

const StyledItem = styld.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledButtonContainer = styld.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'vinkkaa vinkkaa'
    'tilaa digi';
  position: absolute;
  left: 0px;
  width: 100%;
`;

const StyledButton = styld(Button)<ButtonProps & { gridArea: string }>`
  padding: 20px 10px;
  grid-area: ${({ gridArea }) => gridArea};
`;

const MobileMenu = () => {
  const listRef = React.useRef<HTMLUListElement>(null);
  const scrollToBottom = (e: React.MouseEvent<HTMLLIElement>) => {
    setTimeout(() => {
      const target = e.target as HTMLElement;
      listRef.current?.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }, 100);
  };

  return (
    <StyledContainer id="mobile-main-menu">
      <StyledList ref={listRef}>
        {KATEGORY_MENU_ITEMS.map(({ url, title }) => (
          <StyledItem key={url}>
            <MobileMenuItem href={url} bold title={title} />
          </StyledItem>
        ))}
        <StyledItem onClick={scrollToBottom}>
          <CollapsibleItem title="Katso">
            <MobileMenuItem href="https://www.seiska.fi/katso" title="Etusivu" newTab />
            {KATSO_MENU_ITEMS?.map && KATSO_MENU_ITEMS.map(({ url, title }) => <MobileMenuItem key={title + url} href={url} title={title} newTab />)}
          </CollapsibleItem>
        </StyledItem>
        <StyledItem onClick={scrollToBottom}>
          <CollapsibleItem title="Muu">
            {SETTING_MENU_ITEMS.map(({ url, title }) => (
              <MobileMenuItem key={title + url} href={url} title={title} newTab />
            ))}
          </CollapsibleItem>
        </StyledItem>
      </StyledList>
      <StyledButtonContainer>
        <StyledButton intent="green" gridArea="vinkkaa" href="https://www.seiska.fi/contact/user_tips" target="_blank" testId="user_tips_mobile" type="link">
          Vinkkaa ja tienaa
        </StyledButton>
        <StyledButton intent="primary" gridArea="tilaa" href="https://www.seiska.fi/button" target="_blank" rel="noopener noreferrer" type="link">
          Tilaa
        </StyledButton>
        <StyledButton intent="blue" gridArea="digi" href="https://www.seiska.fi/verkkolehti" target="_blank" rel="noopener noreferrer" type="link">
          Digilehti
        </StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default MobileMenu;
