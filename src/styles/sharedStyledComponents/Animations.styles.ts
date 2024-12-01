import styled from 'styled-components';

const offset = window.innerWidth < 768 ? '-100' : '-300';

export const ZoomInUpAnimation = styled.div.attrs({
  'data-aos': 'zoom-in-up',
  'data-aos-duration': '1000',
  'data-aos-offset': offset,
} as React.HTMLAttributes<HTMLDivElement>)``;

export const FadeUpAnimation = styled.div.attrs({
  'data-aos': 'fade-up',
  'data-aos-duration': '1000',
  'data-aos-offset': offset,
} as React.HTMLAttributes<HTMLDivElement>)``;

export const FadeRightAnimation = styled.div.attrs({
  'data-aos': 'fade-right',
  'data-aos-duration': '1500',
  'data-aos-offset': '-150',
} as React.HTMLAttributes<HTMLDivElement>)``;