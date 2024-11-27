import styled from 'styled-components';
import LandscapeNZ from '../../assets/images/landscape-NZ.jpg';

export const BannerWraper = styled.div`
  background: ${({
    theme,
  }) => `linear-gradient( ${theme.LightBlackBackgroundColor}, ${theme.blackBackgroundColor}),
    url(${LandscapeNZ}) no-repeat`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 10rem 2rem;
  margin-top: 10rem;
  line-height: 1.5;
  text-align: center;

  span {
    font-size: 2rem;
    color: ${({ theme }) => theme.brightAqua};
  }

  h3 {
    font-size: 4rem;
    color: ${({ theme }) => theme.white};
    margin-top: 1rem;
  }

  p {
    max-width: 60rem;
    margin: 1rem auto;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.lightColor};
    line-height: 2;
  }
`;
