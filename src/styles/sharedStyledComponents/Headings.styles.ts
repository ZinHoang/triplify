import styled from 'styled-components';

export const HeadingContainer = styled.div<{ marginTop?: string }>`
  text-align: center;
  margin-top: ${({ marginTop }) => marginTop || '5rem'};
  margin-bottom: 2rem;
`;

export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.brightAqua};
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 5rem;
`;

export const PrimaryHeading = styled.h1`
  font-size: 4rem;
  font-style: italic;
  color: ${({ theme }) => theme.white};
`;
