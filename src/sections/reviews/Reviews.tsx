import React from 'react';
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
import { StyledIcon } from '../../styles/sharedStyledComponents';

export const Reviews = () => {
  return (
    <ReviewsWrapper>
      <ReviewsContent>
        <span>TESTIMONIALS</span>
        <h3>What our customers say</h3>
        <p>
          Our customers rave about the unforgettable experiences they've had
          with us. From breathtaking views to heart-pounding adventures, each
          trip is meticulously planned to ensure a perfect blend of excitement
          and relaxation. Discover why so many choose us for their nature
          escapades and create your own story of wonder and awe.
        </p>
      </ReviewsContent>
      <ReviewsCardContainer>
        <ReviewsCard>
          <p>The trip was absolutely amazing!</p>
          <UserDetail>
            <StyledIcon icon={faFaceGrinHearts} />
            <UserNameAndJob>
              <h3>John Doe</h3>
              <span>Designer</span>
            </UserNameAndJob>
          </UserDetail>
        </ReviewsCard>
        <ReviewsCard>
          <p>Every moments were unforgettable.</p>
          <UserDetail>
            <StyledIcon icon={faFaceGrinBeam} />
            <UserNameAndJob>
              <h3>Jane Smith</h3>
              <span>Photographer</span>
            </UserNameAndJob>
          </UserDetail>
        </ReviewsCard>
        <ReviewsCard>
          <p>Truly a once-in-a-lifetime experience.</p>
          <UserDetail>
            <StyledIcon icon={faFaceGrinStars} />
            <UserNameAndJob>
              <h3>Emily Johnson</h3>
              <span>Travel Blogger</span>
            </UserNameAndJob>
          </UserDetail>
        </ReviewsCard>
        <ReviewsCard>
          <p>
            The trip was absolutely amazing! The guides were knowledgeable and
            the scenery was breathtaking.
          </p>
          <UserDetail>
            <StyledIcon icon={faFaceDizzy} />
            <UserNameAndJob>
              <h3>Michael Brown</h3>
              <span>Adventurer</span>
            </UserNameAndJob>
          </UserDetail>
        </ReviewsCard>
        <ReviewsCard>
          <p>
            Exceptional service and stunning locations. I can't wait to book my
            next trip! Everything was perfect from start to finish.
          </p>
          <UserDetail>
            <StyledIcon icon={faFaceSmileBeam} />
            <UserNameAndJob>
              <h3>Sarah Wilson</h3>
              <span>Nature Enthusiast</span>
            </UserNameAndJob>
          </UserDetail>
        </ReviewsCard>
      </ReviewsCardContainer>
    </ReviewsWrapper>
  );
};
