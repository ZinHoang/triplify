import styled from 'styled-components';
import Aurora from '../../assets/images/Aurora.png';

export const HomeWrapper = styled.div`
  padding: 3rem 9%;

  margin: 0 auto;
  margin-top: 9rem;
  width: 90%;
  min-height: 80vh;
  border-radius: 1rem;
  background: ${({
    theme,
  }) => `linear-gradient(${theme.LightBlackBackgroundColor}, ${theme.blackBackgroundColor}),
    url(${Aurora}) no-repeat`};
  /* background: url(${Aurora}) no-repeat; */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* @media (max-width: 991px) {
    padding: 3rem 2rem;
  } */
  @media (max-width: 991px) {
    font-size: 55%;
    & {
      padding: 3rem 2rem;
      /* padding: 1.5rem 2rem; */
    }
  }

  @media (max-width: 450px) {
    font-size: 50%;
  }
`;
