// import LinkNext from 'next/link';
import React from 'react';
import styld from 'styled-components';

const StyledA = styld.a<{ $textDecoration: boolean }>`
  text-decoration: none;
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.textColor};
  ${({ $textDecoration }) => $textDecoration && 'text-decoration: underline;'}
`;

/**
 * Link element that wraps Next.js Link element
 */
const Link = ({ href = '', external: toNewTab = false, className, children, color, colorFocus, onClick, testId, textDecoration, ...props }: LinkProps) => {
  let link;

  // For external links use plain link with target=_blank. Otherwise use Next.js Link
  if (toNewTab) {
    link = (
      <StyledA
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        className={className}
        href={href}
        target="_blank"
        rel="noreferrer"
        color={color}
        onClick={onClick}
        // colorFocus={colorFocus}
        data-testid={testId}
        $textDecoration={textDecoration || false} // provide a default value of false
      >
        {children}
      </StyledA>
    );
  } else {
    // Disable anchor-is-valid rule as Next.js Link uses internal anchor element without href
    link = (
      // <LinkNext href={href} passHref>
      <StyledA
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        className={className}
        color={color}
        href={href}
        // colorFocus={colorFocus}
        data-testid={testId}
        onClick={onClick}
        $textDecoration={textDecoration || false}
      >
        {children}
      </StyledA>
      // </LinkNext>
    );
  }

  return link;
};

type LinkProps = {
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
  colorFocus?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  testId?: string;
  textDecoration?: boolean;
  id?: string;
  submit?: boolean;
  disabled?: boolean;
  // other props
  [x: string]: unknown;
};

export default Link;
