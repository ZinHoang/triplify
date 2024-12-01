import React from 'react';
import {
  HeadingContainer,
  TitleSpan,
  PrimaryHeading,
  ZoomInUpAnimation,
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

const galleryImages = [
  {
    src: CoralEcosystems,
    alt: 'Coral ecosystems in the ocean',
    description: 'Discover the vibrant underwater world',
    title: 'Coral Ecosystems',
  },
  {
    src: WalkingInTheCave,
    alt: 'Walking in the cave in Maldives',
    description: 'Explore the mysterious caves',
    title: 'Maldives Adventure',
  },
  {
    src: GloomyDayNZ,
    alt: 'Gloomy day in New Zealand',
    description: 'Embrace the serene gloom',
    title: 'New Zealand\'s Gloomy Day',
  },
  {
    src: RoadTripNZ,
    alt: 'Road trip in New Zealand',
    description: 'Embark on an epic road trip',
    title: 'New Zealand Road Trip',
  },
  {
    src: TulumMexico,
    alt: 'Tulum in Mexico',
    description: 'Relax in the tropical paradise',
    title: 'Tulum, Mexico',
  },
  {
    src: Maldives,
    alt: 'Beautiful Maldives beach',
    description: 'Experience the pristine beaches',
    title: 'Maldives Beaches',
  },
  {
    src: Diving,
    alt: 'Diving adventure',
    description: 'Dive into the deep blue',
    title: 'Underwater Diving',
  },
  {
    src: DroneViewOfHalongBay,
    alt: 'Drone view of Ha Long Bay',
    description: 'Soar above the stunning bay',
    title: 'Ha Long Bay',
  },
  {
    src: LovelyBird,
    alt: 'Lovely bird in nature',
    description: 'Admire the beauty of wildlife',
    title: 'Lovely Bird',
  },
];

export const Gallery = () => {
  return (
    <>
      <HeadingContainer $marginTop="20rem">
        <TitleSpan>Captured Moments</TitleSpan>
        <PrimaryHeading>Preserving stories in every frame</PrimaryHeading>
      </HeadingContainer>
      <ZoomInUpAnimation>
        <GalleryWrapper>
          {galleryImages.map((image, index) => (
            <GalleryImageContainer key={index}>
              <img src={image.src} alt={image.alt} />
              <span>{image.description}</span>
              <h3>{image.title}</h3>
            </GalleryImageContainer>
          ))}
        </GalleryWrapper>
      </ZoomInUpAnimation>
    </>
  );
};