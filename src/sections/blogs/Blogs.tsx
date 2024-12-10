import React from 'react';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  HeadingContainer,
  TitleSpan,
  PrimaryHeading,
  GridLayout,
  Card,
  ImageContainer,
  StyledIcon,
  Image,
} from '../../styles/sharedStyledComponents';
import { ContentContainer, IconContainer } from './Blogs.styles';
import ScubaDiving from '../../assets/images/scuba-diving.jpg';
import HolidayInMaldives from '../../assets/images/holiday-in-Maldives.jpg';
import ViewFromPlane from '../../assets/images/view-from-plane.jpg';
import BoatTravelingOnWater from '../../assets/images/boat-traveling-on-water.jpg';
import JungleNZ from '../../assets/images/jungle-NZ.jpg';

export const Blogs = () => {
  const blogPosts = [
    {
      src: HolidayInMaldives,
      alt: 'Stunning Maldives beach with turquoise waters',
      title: 'Embrace the journey of a lifetime',
      description:
        'Discover the magic of swimming alongside playful dolphins in paradise.',
      date: '18th May, 2022',
      author: 'McKenzie',
    },
    {
      src: BoatTravelingOnWater,
      alt: 'Boat gliding over crystal clear waters',
      title: 'Sail into adventure',
      description:
        'Feel the breeze on your face as you embark on an unforgettable boat journey.',
      date: '21st Feb, 2023',
      author: 'William',
    },
    {
      src: JungleNZ,
      alt: 'Lush jungle landscape in New Zealand',
      title: "Explore New Zealand's wild beauty",
      description:
        "Venture deep into untouched paradise of nature amidst New Zealand's lush forests.",
      date: '3rd Oct, 2023',
      author: 'Brendon',
    },
    {
      src: ViewFromPlane,
      alt: 'A breathtaking view from a plane over a vast landscape',
      title: 'Soar above the world',
      description:
        'Take in the awe-inspiring views from 30,000 feet above the earth.',
      date: '15th Jan, 2024',
      author: 'Tayla',
    },
    {
      src: ScubaDiving,
      alt: 'Scuba diver exploring vibrant coral reefs',
      title: 'Dive into an underwater wonderland',
      description:
        'Experience the thrill of scuba diving amidst vibrant coral reefs and marine life.',
      date: '20th Nov, 2024',
      author: 'Jenifer',
    },
  ];
  return (
    <>
      <HeadingContainer $marginTop="20rem">
        <TitleSpan>Blogs & Posts</TitleSpan>
        <PrimaryHeading>Epic journeys and unforgettable stories</PrimaryHeading>
      </HeadingContainer>

      <GridLayout $columnWidth="27rem">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <ImageContainer>
              <Image src={post.src} alt={post.alt} />
            </ImageContainer>
            <ContentContainer>
              <a href="#">{post.title}</a>
              <p>{post.description}</p>
              <IconContainer>
                <p>
                  <StyledIcon icon={faClock} /> {post.date}
                </p>
                <p>
                  <StyledIcon icon={faUser} /> By {post.author}
                </p>
              </IconContainer>
            </ContentContainer>
          </Card>
        ))}
      </GridLayout>
    </>
  );
};
