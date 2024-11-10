import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  columns: 3 25rem;
  column-gap: 1.5rem;
`;

export const GalleryImageContainer = styled.div`
  margin-bottom: 1rem;
  break-inside: avoid;
  img {
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.lightColor};
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.white};
  }
`;
