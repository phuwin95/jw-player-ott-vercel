import styld from 'styled-components';

const StyledSeiskaHeader = styld.header`
  z-index: 5;
  display: flex;
  flex-direction: column;
  transition: transform 200ms linear;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
`;

export default StyledSeiskaHeader;
