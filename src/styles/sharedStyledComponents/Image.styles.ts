import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img.attrs({ loading: 'lazy' })`
  height: 20rem;
  width: 100%;
  object-fit: cover;
`;
