import styled from 'styled-components';

export const Button = styled.div`
  display: inline-block;
  padding: 1rem 3rem;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.brightAqua};
  border: ${({ theme }) => theme.border};
  border-radius: 5rem;
  cursor: pointer;
  background: none;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.brightAqua};
    color: ${({ theme }) => theme.blackBackgroundColor};
  }
`;
