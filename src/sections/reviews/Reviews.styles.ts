import styled from 'styled-components';
import { StyledIcon } from '../../styles/sharedStyledComponents';

export const ReviewsWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 15rem;
`;

export const ReviewsContent = styled.div`
  flex: 1 1 42rem;

  span {
    font-size: 2rem;
    color: ${({ theme }) => theme.brightAqua};
  }
  h3 {
    font-size: 3rem;
    color: ${({ theme }) => theme.white};
    padding: 1rem 0;
  }
  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.lightColor};
    padding: 1rem 0;
    line-height: 2;
  }
`;

export const UserCardContainer = styled.div`
  flex: 1 1 42rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const UserCard = styled.div`
  flex: 1 1 20rem;
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.blackBackgroundColor};
  border: 0.2rem solid ${({ theme }) => theme.blackBackgroundColor};
  &:hover {
    border: ${({ theme }) => theme.border};
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.lightColor};
    padding-bottom: 1rem;
    line-height: 2;
  }
`;

export const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${StyledIcon} {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.white};
  }
  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.lightColor};
  }
`;

export const UserNameAndJob = styled.div`
  display: flex;
  flex-direction: column;
`;
