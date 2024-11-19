import styled from 'styled-components';

export const ContentContainer = styled.div`
  padding: 2rem;
  /* text-align: center; */
  a {
    font-size: 2rem;
    color: ${({ theme }) => theme.white};
    &:hover {
      color: ${({ theme }) => theme.brightAqua};
    }
  }

  p {
    padding: 1rem 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.lightColor};
    line-height: 2;
  }
`;

export const IconContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
`;
