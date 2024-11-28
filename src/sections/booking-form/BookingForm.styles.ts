import styled from 'styled-components';
import { Button } from '../../styles/sharedStyledComponents';

export const BookingFormWrapper = styled.div`
  width: 75%;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.darkBackgroundColor};
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(17, 17, 17, 0.3);
  font-size: 1.4rem;
  color: ${({ theme }) => theme.white};
  padding: 3rem 2rem;

  & form {
    display: flex;
    gap: 3rem;
    align-items: flex-end;
    flex-wrap: wrap;

    ${Button} {
      flex: 1 1 15rem;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 25rem;

  & span {
    margin-bottom: 0.5rem;
  }

  & input {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.lightColor};
    width: 100%;
    padding: 1.2rem 1.4rem;
    border: ${({ theme }) => theme.border};
    border-radius: 5rem;
    text-transform: none;
    background: none;
    margin-top: 1rem;
  }
`;
