import styled from 'styled-components';

export const ButtonLink = styled.a`
  display: inline-block;
  /* margin-top: 1rem; NOT NEEDED YET */
  padding: 1rem 3rem;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.blue};
  border: ${({ theme }) => theme.border};
  border-radius: 5rem;
  cursor: pointer;
  background: none;

  &:hover {
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.blackBackgroundColor};
  }
`;
