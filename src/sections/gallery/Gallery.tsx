import React from 'react';
import {
  HeadingContainer,
  TitleSpan,
  PrimaryHeading,
} from '../../styles/sharedStyledComponents';
import { GalleryWrapper, GalleryImageContainer } from './Gallery.styles';
import TulumMexico from '../../assets/images/Tulum-Mexico.jpg';
import Maldives from '../../assets/images/maldives.jpeg';
import CoralEcosystems from '../../assets/images/coral-ecosystems.jpg';
import Diving from '../../assets/images/diving.jpg';
import RoadTripNZ from '../../assets/images/roadtrip-NZ.jpg';
import WalkingInTheCave from '../../assets/images/walking-in-the-cave.jpg';
import DroneViewOfHalongBay from '../../assets/images/drone-view-of-Halong-Bay.jpg';
import LovelyBird from '../../assets/images/lovely-bird.jpg';
import GloomyDayNZ from '../../assets/images/gloomy-day-NZ.jpg';

export const Gallery = () => {
  return (
    <>
      <HeadingContainer marginTop="20rem">
        <TitleSpan>Captured Moments</TitleSpan>
        <PrimaryHeading>Preserving stories in every frame</PrimaryHeading>
      </HeadingContainer>
      <GalleryWrapper>
        <GalleryImageContainer>
          <img src={CoralEcosystems} alt="Coral ecosystems in the ocean" />
          <span>Discover the vibrant underwater world</span>
          <h3>Coral Ecosystems</h3>
        </GalleryImageContainer>
        <GalleryImageContainer>
          <img src={WalkingInTheCave} alt="Walking in the cave in Maldives" />
          <span>Explore the mysterious caves</span>
          <h3>Maldives Adventure</h3>
        </GalleryImageContainer>
        <GalleryImageContainer>
          <img src={GloomyDayNZ} alt="Gloomy day in New Zealand" />
          <span>Embrace the serene gloom</span>
          <h3>New Zealand's Gloomy Day</h3>
        </GalleryImageContainer>
        <GalleryImageContainer>
          <img src={RoadTripNZ} alt="Road trip in New Zealand" />
          <span>Embark on an epic road trip</span>
          <h3>New Zealand Road Trip</h3>
        </GalleryImageContainer>
        <GalleryImageContainer>
          <img src={TulumMexico} alt="Tulum in Mexico" />
          <span>Relax in the tropical paradise</span>
          <h3>Tulum, Mexico</h3>
        </GalleryImageContainer>
        <GalleryImageContainer>
          <img src={Maldives} alt="Beautiful Maldives beach" />
          <span>Experience the pristine beaches</span>
          <h3>Maldives Beaches</h3>
        </GalleryImageContainer>
        <GalleryImageContainer>
          <img src={Diving} alt="Diving adventure" />
          <span>Dive into the deep blue</span>
          <h3>Underwater Diving</h3>
        </GalleryImageContainer>
        <GalleryImageContainer>
          <img src={DroneViewOfHalongBay} alt="Drone view of Ha Long Bay" />
          <span>Soar above the stunning bay</span>
          <h3>Ha Long Bay</h3>
        </GalleryImageContainer>
        <GalleryImageContainer>
          <img src={LovelyBird} alt="Lovely bird in nature" />
          <span>Admire the beauty of wildlife</span>
          <h3>Lovely Bird</h3>
        </GalleryImageContainer>
      </GalleryWrapper>
    </>
  );
};
