import React from 'react';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  HeadingContainer,
  TitleSpan,
  PrimaryHeading,
  GridLayout,
  Card,
  ImageContainer,
  Image,
  StyledIcon,
  FadeUpAnimation,
} from '../../styles/sharedStyledComponents';
import { ContentContainer, IconContainer } from './Blogs.styles';
import ScubaDiving from '../../assets/images/scuba-diving.jpg';
import HolidayInMaldives from '../../assets/images/holiday-in-Maldives.jpg';
import ViewFromPlane from '../../assets/images/view-from-plane.jpg';
import BoatTravelingOnWater from '../../assets/images/boat-traveling-on-water.jpg';
import JungleNZ from '../../assets/images/jungle-NZ.jpg';

export const Blogs = () => {
  return (
    <FadeUpAnimation>
      <HeadingContainer marginTop="20rem">
        <TitleSpan>Blogs & Posts</TitleSpan>
        <PrimaryHeading>Epic journeys and unforgettable stories</PrimaryHeading>
      </HeadingContainer>

      <GridLayout columnWidth="27rem">
        <Card>
          <ImageContainer>
            <Image
              src={HolidayInMaldives}
              alt="Stunning Maldives beach with turquoise waters"
            />
          </ImageContainer>
          <ContentContainer>
            <a href="#">Embrace the journey of a lifetime</a>
            <p>
              Discover the magic of swimming alongside playful dolphins in
              paradise.
            </p>
            <IconContainer>
              <p>
                <StyledIcon icon={faClock} /> 18th May, 2022
              </p>
              <p>
                <StyledIcon icon={faUser} /> By Admin
              </p>
            </IconContainer>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image
              src={BoatTravelingOnWater}
              alt="Boat gliding over crystal clear waters"
            />
          </ImageContainer>
          <ContentContainer>
            <a href="#">Sail into adventure</a>
            <p>
              Feel the breeze on your face as you embark on an unforgettable
              boat journey.
            </p>
            <IconContainer>
              <p>
                <StyledIcon icon={faClock} /> 21st Feb, 2023
              </p>
              <p>
                <StyledIcon icon={faUser} /> By Admin
              </p>
            </IconContainer>
          </ContentContainer>
        </Card>

        <Card>
          <ImageContainer>
            <Image src={JungleNZ} alt="Lush jungle landscape in New Zealand" />
          </ImageContainer>
          <ContentContainer>
            <a href="#">Explore New Zealand's wild beauty</a>
            <p>
              Venture deep into untouched paradise of nature amidst New
              Zealand's lush forests.
            </p>
            <IconContainer>
              <p>
                <StyledIcon icon={faClock} /> 3rd Oct, 2023
              </p>
              <p>
                <StyledIcon icon={faUser} /> By Admin
              </p>
            </IconContainer>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image
              src={ViewFromPlane}
              alt="A breathtaking view from a plane over a vast landscape"
            />
          </ImageContainer>
          <ContentContainer>
            <a href="#">Soar above the world</a>
            <p>
              Take in the awe-inspiring views from 30,000 feet above the earth.
            </p>
            <IconContainer>
              <p>
                <StyledIcon icon={faClock} /> 15th Jan, 2024
              </p>
              <p>
                <StyledIcon icon={faUser} /> By Admin
              </p>
            </IconContainer>
          </ContentContainer>
        </Card>

        <Card>
          <ImageContainer>
            <Image
              src={ScubaDiving}
              alt="Scuba diver exploring vibrant coral reefs"
            />
          </ImageContainer>
          <ContentContainer>
            <a href="#">Dive into an underwater wonderland</a>
            <p>
              Experience the thrill of scuba diving amidst vibrant coral reefs
              and marine life.
            </p>
            <IconContainer>
              <p>
                <StyledIcon icon={faClock} /> 20th Nov, 2024
              </p>
              <p>
                <StyledIcon icon={faUser} /> By Admin
              </p>
            </IconContainer>
          </ContentContainer>
        </Card>
      </GridLayout>
    </FadeUpAnimation>
  );
};
