import styld from 'styled-components';

const ChevronUp = styld.span`
  border-style: solid;
  border-width: 3px 3px 0 0;
  display: inline-block;
  height: 20px;
  width: 20px;
  transform: rotate(-45deg);
  pointer-events: none; // absolute position makes the element not stay within the container
`;

// create a chevron down component using css
const ChevronDown = styld(ChevronUp)`
  transform: rotate(135deg);
`;

export { ChevronUp, ChevronDown };
