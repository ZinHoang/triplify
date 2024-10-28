import styled from 'styled-components';

export const HeadingContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.brightAqua};
  font-size: 2rem;
`;

export const PrimaryHeading = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.white};
`;
