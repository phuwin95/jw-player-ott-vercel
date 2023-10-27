import React, { ReactNode } from 'react';
import styld from 'styled-components';

import Link from './NextLink';

import type { ThemeInterface } from '#types/theme';

interface ButtonElProps {
  children: ReactNode | Array<ReactNode>;
  className?: string;
  disabled?: boolean;
  href?: string;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  /**
   * if button is of type submit, the form will be submitted when clicked.
   */
  submit?: boolean;
  /**
   * Attribute specifies where to display the response after submitting the form
   * @example '_blank'
   */
  target?: string;
  testId?: string;
  type?: 'button' | 'link';
}

export interface ButtonProps extends ButtonElProps {
  border?: string;
  borderRadius?: string;
  height?: string;
  /**
   * Adds custom colors, background, borders, etc. depending on the theme.
   */
  intent: 'primary' | 'optional' | 'default' | 'blue' | 'green' | 'grey' | 'katsoPrimary' | 'black';
  /**
   * Adds custom padding style depending on prop size
   * @example if size === large: '0.5rem 1rem',
   * @default: '0.375rem 0.75rem',
   */
  size?: 'large' | 'default';
  width?: string;
  /**
   * Defines the relationship between a linked resource and the current document
   * @example 'noopener noreferrer
   */
  rel?: string;
  noBorder?: boolean;
  /**
   * if true, margin: 0, if false, margin: 1em 1em 1em 0
   * @default false
   */
  noMargin?: boolean;
  /**
   * Add display block style to button
   * if true, display: block, if false, display: inline-block
   * @default false
   */
  displayBlock?: boolean;
  /**
   * Add custom padding to the button
   * @default '10px 20px'
   */
  padding?: string;
  /**
   * If true, the button is loading, cursor is wait
   * @default false
   */
  isLoading?: boolean;
}

const getBackground = (
  props: ButtonProps & {
    theme: ThemeInterface;
  },
) => {
  const colors = {
    primary: props.theme?.palette?.primary.main,
    default: props.theme?.palette?.secondary.main,
    blue: props?.theme?.palette?.optional.main,
    green: props?.theme?.palette?.tertiary.main,
    katsoPrimary: 'white',
    grey: '#cccccc',
    optional: props?.theme?.palette?.optional.main,
    black: props?.theme?.palette?.primary.main,
  };
  return colors[props.intent ?? 'default'] ?? 'transparent';
};

const getBorder = (
  props: ButtonProps & {
    theme: ThemeInterface;
  },
) => {
  const borderColor: Record<string, string> = {
    grey: '#999999',
    default: props.theme?.palette?.secondary.main || '',
    primary: props.theme?.palette?.primary.main || '',
    blue: props?.theme?.palette?.optional.main || '',
    green: props?.theme?.palette?.tertiary.main || '',
    katsoPrimary: 'white',
    black: props?.theme?.palette?.primary.main || '',
  };
  return borderColor[props.intent ?? 'default'] || props.border || 'none';
};

const getColor = (
  props: ButtonProps & {
    theme: ThemeInterface;
  },
) => {
  const colors: Record<string, string> = {
    grey: '#666666',
    default: props.theme.textBlack || '',
    katsoPrimary: props.theme.colors.katsoViolet || '',
    primary: props.theme?.palette?.primary.bgColor || '',
  };
  return colors[props.intent ?? 'default'] || props.theme?.palette?.primary.bgColor || '';
};

const getHoverBackground = (
  props: ButtonProps & {
    theme: ThemeInterface;
  },
) => {
  const colors: Record<string, string> = {
    primary: props.theme.palette?.primary.dark || '',
    default: props.theme.palette?.secondary.dark || '',
    blue: props.theme.palette?.optional.dark || '',
    green: props.theme.palette?.tertiary.dark || '',
    katsoPrimary: props.theme.colors?.placeholderGray || '',
    grey: '',
    optional: props.theme.palette?.optional.dark || '',
    black: props.theme.palette?.primary.dark || '',
  };
  return colors[props.intent ?? 'default'] || 'transparent';
};

const getPadding = (props: ButtonProps) => {
  const sizes: Record<string, string> = {
    large: '0.5rem 1rem',
    default: '0.375rem 0.75rem',
  };
  return sizes[props.size ?? 'default'];
};

const ButtonEl = (props: ButtonElProps) => {
  const {
    children,
    className = undefined,
    onClick = undefined,
    type = 'button',
    href = undefined,
    disabled = false,
    submit = false,
    id = '',
    testId = '',
    target = '',
  } = props;
  return (
    <>
      {type === 'link' ? (
        <Link className={className} onClick={onClick} href={href} disabled={disabled} id={id} testId={testId} target={target}>
          {children}
        </Link>
      ) : (
        <button
          className={className}
          // @ts-ignore
          onClick={onClick}
          type={submit ? 'submit' : 'button'}
          disabled={disabled}
          id={id}
          data-testid={testId}
        >
          {children}
        </button>
      )}
    </>
  );
};

const Button = styld(ButtonEl)<ButtonProps>`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${(props) => getBorder(props)};
  line-height: 1.12;
  font-family: ${({ theme }) => theme.fontHeading};
  font-weight: 800;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: ${(props) => getBackground(props)};
  color: ${(props) => getColor(props)};
  padding: ${(props) => getPadding(props)};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => getHoverBackground(props)};
  }
  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

export default Button;
