import React from 'react';
import {
  HeadingContainer,
  TitleSpan,
  PrimaryHeading,
  GridContainer,
  StyledIcon,
} from '../../styles/sharedStyledComponents';
import { ContentContainer, ServicesCard } from './Services.styles';
import {
  faGlobe,
  faHiking,
  faUtensils,
  faHeadset,
  faHotel,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

export const Services = () => {
  return (
    <>
      <HeadingContainer marginTop="20rem">
        <TitleSpan>What We Offer</TitleSpan>
        <PrimaryHeading>Endless experiences, crafted for you</PrimaryHeading>
      </HeadingContainer>

      <GridContainer columnWidth="38rem">
        {/* Initial value was 32rem */}
        <ServicesCard>
          <ContentContainer>
            <StyledIcon icon={faGlobe} fontSize="5rem" marginBottom="1rem" />
            <h3>WorldWide</h3>
            <p>Explore the world with our expert guides.</p>
          </ContentContainer>
        </ServicesCard>
        <ServicesCard>
          <ContentContainer>
            <StyledIcon icon={faHiking} fontSize="5rem" marginBottom="1rem" />
            <h3>Adventures</h3>
            <p>Explore the world with our expert guides.</p>
          </ContentContainer>
        </ServicesCard>
        <ServicesCard>
          <ContentContainer>
            <StyledIcon icon={faUtensils} fontSize="5rem" marginBottom="1rem" />
            <h3>Food & Drinks</h3>
            <p>Explore the world with our expert guides.</p>
          </ContentContainer>
        </ServicesCard>
        <ServicesCard>
          <ContentContainer>
            <StyledIcon icon={faHotel} fontSize="5rem" marginBottom="1rem" />
            <h3>Luxury Hotels</h3>
            <p>Explore the world with our expert guides.</p>
          </ContentContainer>
        </ServicesCard>
        <ServicesCard>
          <ContentContainer>
            <StyledIcon icon={faWallet} fontSize="5rem" marginBottom="1rem" />
            <h3>Affordable Price</h3>
            <p>Explore the world with our expert guides.</p>
          </ContentContainer>
        </ServicesCard>
        <ServicesCard>
          <ContentContainer>
            <StyledIcon icon={faHeadset} fontSize="5rem" marginBottom="1rem" />
            <h3>24/7 Support</h3>
            <p>Explore the world with our expert guides.</p>
          </ContentContainer>
        </ServicesCard>
      </GridContainer>
    </>
  );
};
