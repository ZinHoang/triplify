import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.darkBackgroundColor};
  padding: 1.5rem 2rem;
`;

export const CustomNav = styled.nav<{ $isActive: boolean }>`
  & ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;

    & li {
      font-size: 1.7rem;
      color: ${({ theme }) => theme.white};
      margin: 0 1rem;
      &:hover {
        color: ${({ theme }) => theme.brightAqua};
      }
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.darkBackgroundColor};

    // collapse the menu when not active.
    // Get the polygon values at https://bennettfeely.com/clippy/
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