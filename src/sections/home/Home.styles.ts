import styled from 'styled-components';
import Aurora from '../../assets/images/Aurora.png';

export const HomeWrapper = styled.div`
  /* padding: 3rem 5.625rem; */
  padding: 3rem;
  margin: 0 auto;
  margin-top: 9rem;
  width: 100%;
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
  padding-bottom: 5rem;

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

export const TextWithStrokes = styled.span`
  font-weight: bolder;
  font-size: 4.8rem;
  display: block;
  color: transparent;
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.white};
`;

export const LargeHeading = styled.h3`
  font-size: 7.2rem;
  color: ${({ theme }) => theme.white};
`;

export const ContentText = styled.p`
  max-width: 60rem;
  margin: 1rem auto;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.lightColor};
  line-height: 2;
`;
