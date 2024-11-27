import { useState } from 'react';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderWrapper, CustomNav, MenuButton } from './Header.styles';
import { Button, Logo, StyledIcon } from '../../styles/sharedStyledComponents';

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <HeaderWrapper>
      <MenuButton icon={faBars} onClick={handleClick} />
      <Logo fontSize="2.5rem">
        <StyledIcon icon={faPaperPlane} paddingRight="0.5rem" />
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

      <Button>Book Now</Button>
    </HeaderWrapper>
  );
};
