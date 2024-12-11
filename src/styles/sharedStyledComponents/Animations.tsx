import React, { ReactNode } from 'react';
import { AttentionSeeker, Fade, Slide, Zoom } from 'react-awesome-reveal';

interface AnimationProps {
  children: ReactNode;
}

export const ZoomUpAnimation = ({ children }: AnimationProps) => (
  <Zoom duration={1500} direction="up" triggerOnce={true}>
    {children}
  </Zoom>
);

export const SlideUpAnimation = ({ children }: AnimationProps) => (
  <Slide direction="up" duration={1000} triggerOnce={true}>
    {children}
  </Slide>
);
export const PulseAnimation = ({ children }: AnimationProps) => (
  <AttentionSeeker
    effect="pulse"
    delay={300}
    duration={1000}
    triggerOnce={true}
  >
    {children}
  </AttentionSeeker>
);
export const FadeRightAnimation = ({ children }: AnimationProps) => (
  <Fade direction="right" duration={1000} triggerOnce={true}>
    {children}
  </Fade>
);
export const FadeLeftAnimation = ({ children }: AnimationProps) => (
  <Fade direction="left" duration={1000} triggerOnce={true}>
    {children}
  </Fade>
);
export const FadeUpAnimation = ({ children }: AnimationProps) => (
  <Fade delay={300} direction="up" duration={1000} triggerOnce={true}>
    {children}
  </Fade>
);
