import styled, { css } from 'styled-components';

const grid = (val: string) => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${val}, 1fr));
  gap: 1.5rem;
`;
export const GridContainer = styled.div<{ columnWidth: string }>`
  ${({ columnWidth }) => grid(columnWidth)};
  color: ${({ theme }) => theme.lightColor};
`;
