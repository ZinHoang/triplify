import React, { useState } from 'react';
import {
  AboutWrapper,
  ContentContainer,
  Video,
  VideoContainer,
  VideoControls,
  VideoControlsContainer,
} from './About.styles';
import {
  Button,
  FadeLeftAnimation,
  FadeRightAnimation,
} from '../../styles/sharedStyledComponents';

export const About = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = [
    'https://videos.pexels.com/video-files/5607745/5607745-uhd_2560_1440_30fps.mp4',
    'https://videos.pexels.com/video-files/5548361/5548361-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
  ];

  return (
    <AboutWrapper>
      <VideoContainer>
        <FadeLeftAnimation>
          <Video src={videos[videoIndex]} muted autoPlay loop></Video>
          <VideoControlsContainer>
            <VideoControls onClick={() => setVideoIndex(0)} />
            <VideoControls onClick={() => setVideoIndex(1)} />
            <VideoControls onClick={() => setVideoIndex(2)} />
          </VideoControlsContainer>
        </FadeLeftAnimation>
      </VideoContainer>

      <FadeRightAnimation>
        <ContentContainer>
          <span>Why choose us?</span>
          <h3>Embark on an Unforgettable Journey</h3>
          <p>
            Join us to explore the hidden gems of nature, where every moment is
            a new adventure waiting to be discovered. <br />
            Experience the thrill of the wild, the serenity of untouched
            landscapes, and the beauty of diverse ecosystems. <br />
            Let us guide you through an extraordinary journey that will leave
            you with memories to cherish for a lifetime.
          </p>
          <Button>Read More</Button>
        </ContentContainer>
      </FadeRightAnimation>
    </AboutWrapper>
  );
};
