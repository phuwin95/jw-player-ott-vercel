import React from 'react';
import styld from 'styled-components';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

import { ChevronUp, ChevronDown } from './Chevron';
import { MobileMenuItemCss } from './MobileMenuItem';

const StyledChevronUp = styld(ChevronUp)`
  right: 30px;
  top: 23px;
  position: absolute;
`;

const StyledChevronDown = styld(ChevronDown)`
  top: 13px;
  right: 30px;
  position: absolute;
`;

const StyledItem = styld(AccordionItemButton)<{ $bold: string | boolean }>`
  ${MobileMenuItemCss}
  cursor: pointer;
  position: relative;
`;

const StyledPanel = styld(AccordionItemPanel)`
  background-color: ${(props) => props.theme.background};
`;

export type CollapsibleItemProps = {
  children: React.ReactNode;
  title: string;
};

export default function CollapsibleItem({ children, title }: CollapsibleItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Accordion allowZeroExpanded onChange={toggle}>
      <AccordionItem>
        <AccordionItemHeading>
          <StyledItem $bold="true">
            {title}
            {isOpen ? <StyledChevronUp /> : <StyledChevronDown />}
          </StyledItem>
        </AccordionItemHeading>
        <StyledPanel>{children}</StyledPanel>
      </AccordionItem>
    </Accordion>
  );
}
