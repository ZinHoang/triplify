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
        <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500">
          <TextWithStrokes>Follow us</TextWithStrokes>
          <LargeHeading>To The Unknown</LargeHeading>
          <ContentText>
            Embark on a journey beyond the ordinary. Discover hidden treasures,
            breathtaking landscapes, and unforgettable memories.
          </ContentText>
          <Button>Book Now</Button>
        </div>
      </HomeWrapper>
    </>
  );
};
