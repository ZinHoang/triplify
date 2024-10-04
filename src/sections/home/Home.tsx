import React from 'react';
import styled from 'styled-components';
import { ButtonLink } from '../../styles/sharedStyles';
import Aurora from '../../assets/images/Aurora.png';

export const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <TextWithStrokes>Follow us</TextWithStrokes>
        <LargeHeading>to the unknown</LargeHeading>
        <ContentText>Random messages hereLet's make it supper long</ContentText>
        <ButtonLink>Book Now</ButtonLink>
      </div>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
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
  /* background: url(${Aurora}) no-repeat; -- No gradient */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

`;

const TextWithStrokes = styled.span`
  font-weight: bolder;
  font-size: 4.8rem;
  display: block;
  color: transparent;
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.white};
`;

const LargeHeading = styled.h3`
  font-size: 7.2rem;
  color: ${({ theme }) => theme.white};
`;

const ContentText = styled.p`
  max-width: 60rem;
  margin: 1rem auto;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.lightColor};
  line-height: 2;
`;

// Continue the video from 23:00
