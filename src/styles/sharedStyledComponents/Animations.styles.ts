import styled from 'styled-components';

export const ZoomInUpAnimation = styled.div.attrs({
  'data-aos': 'zoom-in-up',
  'data-aos-duration': '1000',
  'data-aos-offset': '-150',
} as React.HTMLAttributes<HTMLDivElement>)``;

export const FadeUpAnimation = styled.div.attrs({
  'data-aos': 'fade-up',
  'data-aos-duration': '1000',
  'data-aos-offset': '-150',
} as React.HTMLAttributes<HTMLDivElement>)``;
