import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center; // need to check if need both align-items and justify-content
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; // this is to be removed if possible
  background-color: ${({ theme }) => theme.backgroundColor};

  padding: 1.5rem 2rem;

  /* @media (max-width: 991px) {
    padding: 1.5rem 2rem;
  } */
`;

export const Logo = styled.span`
  color: ${({ theme }) => theme.white};
  font-size: 2.5rem;
  font-weight: bolder;
`;

export const PaperPlaneIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.blue};
  padding-right: 0.5rem;
`;

export const CustomNav = styled.nav<{ $isActive: boolean }>`
  & ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;

    & li {
      font-size: 1.7rem;
      /* color: ${({ theme }) => theme.lightColor}; */
      color: ${({ theme }) => theme.white};
      /* display: inline-block; NO EFFECT*/
      margin: 0 1rem;
      &:hover {
        color: ${({ theme }) => theme.blue};
      }
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.backgroundColor};

    // collapse the menu when not active
    clip-path: ${({ $isActive }) =>
      $isActive
        ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        : 'polygon(0 0, 100% 0, 100% 0, 0 0)'};

    & ul {
      flex-direction: column;
      gap: 0;
      & li {
        margin: 2rem;
        font-size: 2rem;
        display: block;
      }
    }
  }
`;

export const MenuButton = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;