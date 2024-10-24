import React from 'react';
import { Button } from '../../styles/sharedStyles';
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
          <LargeHeading>to the unknown</LargeHeading>
          <ContentText>
            Random messages hereLet's make it supper long
          </ContentText>
          <Button>Book Now</Button>
        </div>
      </HomeWrapper>
    </>
  );
};

// Continue the video from 31:24
