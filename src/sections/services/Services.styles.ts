import styled from 'styled-components';

export const ServicesCard = styled.div`
  background-color: ${({ theme }) => theme.darkBackgroundColor};
  border-radius: 1rem;
  padding: 3rem;
  text-align: center;
  border: 0.2rem solid ${({ theme }) => theme.blackBackgroundColor};

  &:hover {
    border: ${({ theme }) => theme.border};
  }
`;

export const ContentContainer = styled.div`
  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.white};
  }
  p {
    padding: 1rem 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.lightColor};
    line-height: 2;
  }
`;
