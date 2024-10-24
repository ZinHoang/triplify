import { useState } from 'react';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderWrapper,
  Logo,
  CustomNav,
  PaperPlaneIcon,
  MenuButton,
} from './Header.styles';
import { ButtonLink } from '../../styles/sharedStyles';

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <HeaderWrapper>
      <MenuButton icon={faBars} onClick={handleClick} />
      <Logo>
        <PaperPlaneIcon icon={faPaperPlane} />
        Triplify
      </Logo>
      <CustomNav $isActive={isActive}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#destination">Destination</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#blogs">Blog</a>
          </li>
        </ul>
      </CustomNav>

      <ButtonLink>Book Now</ButtonLink>
    </HeaderWrapper>
  );
};
