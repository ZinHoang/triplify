import styled from 'styled-components';
import { StyledIcon } from '../../styles/sharedStyledComponents';

export const ContentContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.white};
  }
  p {
    padding: 1rem 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.lightColor};
    line-height: 2;
  }
  a {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.brightAqua};
    ${StyledIcon} {
      &:hover {
        padding-left: 1rem;
      }
    }
  }
`;
