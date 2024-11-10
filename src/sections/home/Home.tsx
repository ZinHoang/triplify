import React from 'react';
import { Button } from '../../styles/sharedStyledComponents';
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
          <TextWithStrokes>Follow us</TextWithStrokes>
          <LargeHeading>To The Unknown</LargeHeading>
          <ContentText>
          Embark on a journey beyond the ordinary. Discover hidden treasures, breathtaking landscapes, and unforgettable memories.
          </ContentText>
          <Button>Book Now</Button>
        </div>
      </HomeWrapper>
    </>
  );
};

// Continue the video from 35:17
