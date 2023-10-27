import React from 'react';
import styled, { css } from 'styled-components';

import Link from './NextLink';

export const MobileMenuItemCss = css<{ bold: boolean | string }>`
  font-size: 1.4375rem; // 23px
  font-weight: ${(props) => (props.bold ? '700' : 'normal')};
  line-height: 1.2;
  color: ${(props) => props.theme.textColor};
  padding: 15px 30px;
  background-color: ${(props) => props.theme.background};
  display: block;
`;

const StyledLink = styled(Link)<{ bold: boolean }>`
  ${MobileMenuItemCss}
`;

export type MobileMenuItemProps = {
  title: string;
  href?: string;
  bold?: boolean;
  className?: string;
  newTab?: boolean;
  onClick?: () => void;
};

const MobileMenuItem = ({ title, href, bold, className, newTab, onClick }: MobileMenuItemProps) => (
  <StyledLink href={href} bold={bold} className={className} external={newTab} onClick={onClick}>
    {title}
  </StyledLink>
);

export default MobileMenuItem;
