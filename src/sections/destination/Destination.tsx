import React from 'react';
import {
  Card,
  GridLayout,
  HeadingContainer,
  ImageContainer,
  Image,
  PrimaryHeading,
  StyledIcon,
  TitleSpan,
  ZoomUpAnimation,
} from '../../styles/sharedStyledComponents';
import HaLongBay from '../../assets/images/HaLong-bay.jpg';
import MountainVietnam from '../../assets/images/mountain-Vietnam.jpg';
import QueenstownNz from '../../assets/images/Queenstown-NZ.jpg';
import RuralVietnam from '../../assets/images/rural-Vietnam.jpg';
import RuralSunset from '../../assets/images/rural-sunset.jpg';
import TaiwanBuddha from '../../assets/images/Taiwan-Buddha.jpg';
import UnderOceanDolphin from '../../assets/images/under-ocean-dophin.jpg';
import KayakThroughCave from '../../assets/images/kayak-through-cave.jpg';
import MountainNZ from '../../assets/images/mountain-NZ.jpg';
import BeachWave from '../../assets/images/beach-wave.jpg';
import GreenAurora from '../../assets/images/green-Aurora.jpg';
import BirdWithMountainBackground from '../../assets/images/bird-with-moutain-background.jpg';
import { ContentContainer } from './Destination.styles';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const Destination = () => {
  const cards = [
    {
      src: UnderOceanDolphin,
      alt: 'Dophin in the ocean',
      title: 'Paradise in the Bahamas',
      description: 'Swim alongside these friendly dolphins.',
    },
    {
      src: HaLongBay,
      alt: 'Ha Long Bay in Vietnam',
      title: 'Ha Long bay',
      description: 'Explore emerald waters and towering limestone cliffs.',
    },
    {
      src: RuralSunset,
      alt: 'rural sunset in New Zealand',
      title: 'New Zealand sunset',
      description: 'Witness breathtaking rural landscapes at dusk.',
    },
    {
      src: QueenstownNz,
      alt: 'marvelous view in Queenstown NZ',
      title: 'Queenstown',
      description:
        'Experience adventure and serenity in this stunning town of New Zealand.',
    },
    {
      src: RuralVietnam,
      alt: 'rural in Vietnam',
      title: `Vietnam's rice terraces`,
      description: "Discover Vietnam's picturesque countryside villages.",
    },
    {
      src: TaiwanBuddha,
      alt: 'gigantic Buddha statue in a Taiwanese temple',
      title: 'Fo Guang Shan',
      description: "Marvel at the serenity of Taiwan's monumental temple.",
    },
    {
      src: KayakThroughCave,
      alt: 'kayaking through Phong Nha cave',
      title: 'Phong Nha Caves',
      description: "Explore Vietnam's majestic Phong Nha caves by kayak.",
    },
    {
      src: MountainVietnam,
      alt: 'mountain in Vietnam',
      title: 'Ninh Binh, Vietnam',
      description: "Venture through Vietnam's rugged mountain landscapes.",
    },
    {
      src: BeachWave,
      alt: 'beach',
      title: 'Tulum, Mexico',
      description: 'Relax by the shore and enjoy the rhythmic waves.',
    },
    {
      src: GreenAurora,
      alt: 'green Aurora',
      title: 'Aurora, Iceland',
      description: "Be captivated by Iceland's enchanting northern lights.",
    },
    {
      src: BirdWithMountainBackground,
      alt: 'bird with mountain background',
      title: 'The Nature',
      description: 'Admire serene landscapes where nature meets the sky.',
    },
    {
      src: MountainNZ,
      alt: 'mountain landscapes in New Zealand',
      title: 'Mountain Peaks',
      description: "Discover the towering peaks of New Zealand's mountains.",
    },
  ];

  return (
    <>
      <HeadingContainer>
        <TitleSpan>Our Favorite Places</TitleSpan>
        <PrimaryHeading>Your journey begins here</PrimaryHeading>
      </HeadingContainer>
      <GridLayout $columnWidth="27rem">
        {cards.map((card, index) => (
          <ZoomUpAnimation key={`${index}-${card.title}`}>
            <Card>
              <ImageContainer>
                <Image src={card.src} alt={card.alt} />
              </ImageContainer>
              <ContentContainer>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="#">
                  Read more <StyledIcon icon={faAngleRight} />
                </a>
              </ContentContainer>
            </Card>
          </ZoomUpAnimation>
        ))}
      </GridLayout>
    </>
  );
};
