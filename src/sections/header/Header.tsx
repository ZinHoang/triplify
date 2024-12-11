import { useState } from 'react';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderWrapper, CustomNav, MenuButton } from './Header.styles';
import {
  Button,
  Logo,
  PulseAnimation,
  StyledIcon,
} from '../../styles/sharedStyledComponents';
import { Link } from 'react-scroll';

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const links = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'gallery', label: 'Gallery' },
    { href: 'destination', label: 'Destination' },
    { href: 'services', label: 'Services' },
    { href: 'blogs', label: 'Blog' },
  ];

  return (
    <HeaderWrapper>
      <MenuButton icon={faBars} onClick={handleClick} />
      <PulseAnimation>
        <Logo fontSize="2.5rem">
          <StyledIcon icon={faPaperPlane} $paddingRight="0.5rem" />
          Triplify
        </Logo>

        <CustomNav $isActive={isActive}>
          <ul>
            {links.map((link, index) => (
              <NavLink key={index} href={link.href} label={link.label} />
            ))}
          </ul>
        </CustomNav>
        <Button>Book Now</Button>
      </PulseAnimation>
    </HeaderWrapper>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <li>
      <Link to={href} smooth={true} duration={500}>
        {label}
      </Link>
    </li>
  );
};