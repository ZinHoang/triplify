import { useState } from 'react';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/home">Gallery</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
        </ul>
      </CustomNav>

      <ButtonLink>Book Now</ButtonLink>
    </HeaderWrapper>
  );
};
