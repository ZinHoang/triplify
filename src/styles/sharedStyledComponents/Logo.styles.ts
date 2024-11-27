import styled from 'styled-components';

export const Logo = styled.span<{ fontSize: string }>`
  color: ${({ theme }) => theme.white};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  font-weight: bolder;
`;
