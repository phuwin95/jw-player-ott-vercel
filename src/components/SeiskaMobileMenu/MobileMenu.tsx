import React from 'react';
import styled from 'styled-components';
import { KATEGORY_MENU_ITEMS, KATSO_MENU_ITEMS, SETTING_MENU_ITEMS } from 'src/utils/constants';

import Button, { ButtonProps } from './Button';
import MobileMenuItem from './MobileMenuItem';
import CollapsibleItem from './CollapsibleItem';

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: 5px;
`;

const StyledList = styled.ul`
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
      height: 30px;
      bottom: 171px;
      background: linear-gradient(0deg, ${theme.background} 0%, rgba(0,0,0,0) 100%);
      // transform: rotate(180deg);
    }`}
`;

const StyledItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledButtonContainer = styled.div`
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

const StyledButton = styled(Button)<ButtonProps & { gridArea: string }>`
  padding: 20px 10px;
  grid-area: ${({ gridArea }) => gridArea};
`;

const MobileMenu = () => {
  const listRef = React.useRef<HTMLUListElement>(null);
  const scrollToBottom = (e: React.MouseEvent<HTMLLIElement>) => {
    setTimeout(() => {
      listRef.current?.scrollTo({
        top: e.currentTarget.offsetTop,
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
            <MobileMenuItem href="/katso" title="Etusivu" newTab />
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
        <StyledButton intent="green" gridArea="vinkkaa" href="/contact/user_tips" target="_blank" testId="user_tips_mobile" type="link">
          Vinkkaa ja tienaa
        </StyledButton>
        <StyledButton intent="primary" gridArea="tilaa" href="/button" target="_blank" rel="noopener noreferrer" type="link">
          Tilaa
        </StyledButton>
        <StyledButton intent="blue" gridArea="digi" href="/verkkolehti" target="_blank" rel="noopener noreferrer" type="link">
          Digilehti
        </StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default MobileMenu;
