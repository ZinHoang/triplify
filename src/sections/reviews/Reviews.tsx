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
              <h3>John Vague</h3>
              <span>
                <i> Designer</i>
              </span>
            </UserNameAndJob>
          </UserDetail>
        </ReviewsCard>
        <ReviewsCard>
          <p>Every moments were unforgettable.</p>
          <UserDetail>
            <StyledIcon icon={faFaceGrinBeam} />
            <UserNameAndJob>
              <h3>Jane Roller</h3>
              <span>
                <i> Photographer</i>
              </span>
            </UserNameAndJob>
          </UserDetail>
        </ReviewsCard>
        <ReviewsCard>
          <p>Truly a once-in-a-lifetime experience.</p>
          <UserDetail>
            <StyledIcon icon={faFaceGrinStars} />
            <UserNameAndJob>
              <h3>Emily Jackquie</h3>
              <span>
                <i>Travel Blogger</i>
              </span>
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
              <h3>Michael Brendon</h3>
              <span>
                <i>Adventurer</i>
              </span>
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
              <span>
                <i>Nature Enthusiast</i>
              </span>
            </UserNameAndJob>
          </UserDetail>
        </ReviewsCard>
      </ReviewsCardContainer>
    </ReviewsWrapper>
  );
};
