// import React from 'react';
import {
  ReviewsWrapper,
  ReviewsContent,
  ReviewsCard,
  ReviewsCardContainer,
  UserDetail,
  UserNameAndJob,
} from './Reviews.styles';
import {
  faFaceGrinBeam,
  faFaceGrinStars,
  faFaceDizzy,
  faFaceGrinHearts,
  faFaceSmileBeam,
} from '@fortawesome/free-solid-svg-icons';
import {
  FadeLeftAnimation,
  FadeRightAnimation,
  StyledIcon,
} from '../../styles/sharedStyledComponents';

const reviews = [
  {
    text: 'The trip was absolutely amazing !',
    icon: faFaceGrinHearts,
    name: 'John Vague',
    job: 'Designer',
  },
  {
    text: 'Truly a once-in-a-lifetime experience !',
    icon: faFaceGrinStars,
    name: 'Emily Jackquie',
    job: 'Travel Blogger',
  },
  {
    text: 'Every moment was unforgettable.',
    icon: faFaceGrinBeam,
    name: 'Jane Roller',
    job: 'Photographer',
  },
  {
    text: 'The guides were very knowledgeable.',
    icon: faFaceDizzy,
    name: 'Michael Brendon',
    job: 'Adventurer',
  },
  {
    text: "❤️ Exceptional services and stunning locations. I can't wait to book my next trip !",
    icon: faFaceSmileBeam,
    name: 'Sarah Wilson',
    job: 'Nature Enthusiast',
  },
];

export const Reviews = () => {
  return (
    <ReviewsWrapper>
      <ReviewsContent>
        <FadeLeftAnimation>
          <span>TESTIMONIALS</span>
          <h3>What our customers say</h3>
          <p>
            Our customers rave about the unforgettable experiences they've had
            with us. From breathtaking views to heart-pounding adventures, each
            trip is meticulously planned to ensure a perfect blend of excitement
            and relaxation. Discover why so many choose us for their nature
            escapades and create your own story of wonder and awe.
          </p>
        </FadeLeftAnimation>
      </ReviewsContent>
      <ReviewsCardContainer>
        {reviews.map((review, index) => (
          <FadeRightAnimation key={`${index}-${review.name}`}>
            <ReviewsCard>
              <p>{review.text}</p>
              <UserDetail>
                <StyledIcon icon={review.icon} />
                <UserNameAndJob>
                  <h3>{review.name}</h3>
                  <span>
                    <i>{review.job}</i>
                  </span>
                </UserNameAndJob>
              </UserDetail>
            </ReviewsCard>
          </FadeRightAnimation>
        ))}
      </ReviewsCardContainer>
    </ReviewsWrapper>
  );
};
