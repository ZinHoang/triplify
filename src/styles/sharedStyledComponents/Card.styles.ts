import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.darkBackgroundColor};
  &:hover img {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
