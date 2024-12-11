// import React from 'react';
import {
  HeadingContainer,
  TitleSpan,
  PrimaryHeading,
  GridLayout,
  StyledIcon,
  FadeRightAnimation,
} from '../../styles/sharedStyledComponents';
import { ContentContainer, ServicesCard } from './Services.styles';
import {
  faGlobe,
  faHiking,
  faUtensils,
  faHeadset,
  faHotel,
  faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons';

export const Services = () => {
  const services = [
    {
      icon: faGlobe,
      title: 'WorldWide',
      description: 'Explore the world with our expert guides.',
    },
    {
      icon: faHiking,
      title: 'Adventures',
      description: 'Explore the world with our expert guides.',
    },
    {
      icon: faUtensils,
      title: 'Food & Drinks',
      description: 'Explore the world with our expert guides.',
    },
    {
      icon: faHotel,
      title: 'Luxury Hotels',
      description: 'Explore the world with our expert guides.',
    },
    {
      icon: faMoneyCheckDollar,
      title: 'Affordable Price',
      description: 'Explore the world with our expert guides.',
    },
    {
      icon: faHeadset,
      title: '24/7 Support',
      description: 'Explore the world with our expert guides.',
    },
  ];
  return (
    <>
      <HeadingContainer $marginTop="20rem">
        <TitleSpan>What We Offer</TitleSpan>
        <PrimaryHeading>Endless experiences, crafted for you</PrimaryHeading>
      </HeadingContainer>

      <GridLayout $columnWidth="32rem">
        {services.map((service, index) => (
          <FadeRightAnimation key={`${index}-${service.title}`}>
            <ServicesCard>
              <ContentContainer>
                <StyledIcon
                  icon={service.icon}
                  $fontSize="5rem"
                  $marginBottom="1rem"
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ContentContainer>
            </ServicesCard>
          </FadeRightAnimation>
        ))}
      </GridLayout>
    </>
  );
};
