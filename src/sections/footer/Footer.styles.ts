import { Link } from 'react-scroll';
import { StyledIcon } from './../../styles/sharedStyledComponents/FontAwesomeIcon.styles';
import styled from 'styled-components';

export const FooterWrapper = styled.section`
  margin-top: 5rem;
`;

export const ColumnContainer = styled.div`
  padding: 1rem 0;
  h3 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.white};
    padding: 1rem 0;
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.lightColor};
    padding: 1rem 0;
    line-height: 2;
  }
`;

export const SocialMediaContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
    font-size: 1.7rem;
    border-radius: 50%;
    border: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.brightAqua} !important;
    margin-right: 0.75rem;
    &:hover {
      background-color: ${({ theme }) => theme.brightAqua};
      color: ${({ theme }) => theme.darkBackgroundColor};
    }
  }
`;

export const QuickLinksContainer = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.lightColor};
  padding: 1rem 0;
  display: block;
`;

export const QuickLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.lightColor};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.brightAqua};

    ${StyledIcon} {
      padding-right: 2rem;
    }
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  border: ${({ theme }) => theme.border};
  border-radius: 5rem;
  padding: 1.2rem 1.4rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.lightColor};
  background: none;
  text-transform: none;
`;
