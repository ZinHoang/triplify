import styled from 'styled-components';
import Aurora from '../../assets/images/Aurora.png';

export const HomeWrapper = styled.div`
  padding: 3rem 9%;

  margin: 0 auto;
  margin-top: 9rem;
  width: 90%;
  min-height: 80vh;
  border-radius: 1rem;
  background: url(${Aurora}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;

  @media (max-width: 991px) {
    padding: 3rem 2rem;
  }
`;
