import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled(LazyLoadImage)`
  height: 20rem;
  width: 100%;
  object-fit: cover;
`;
