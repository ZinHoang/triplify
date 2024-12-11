// import React from 'react';
import { Button, FadeUpAnimation } from '../../styles/sharedStyledComponents';
import {
  ContentText,
  HomeWrapper,
  LargeHeading,
  TextWithStrokes,
} from './Home.styles';

export const Home = () => {
  return (
    <>
      <HomeWrapper>
        <div>
          <FadeUpAnimation>
            <TextWithStrokes>Follow us</TextWithStrokes>
            <LargeHeading>To The Unknown</LargeHeading>
            <ContentText>
              Embark on a journey beyond the ordinary. Discover hidden
              treasures, breathtaking landscapes, and unforgettable memories.
            </ContentText>
            <Button>Book Now</Button>
          </FadeUpAnimation>
        </div>
      </HomeWrapper>
    </>
  );
};
