import { useState } from 'react';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderWrapper, CustomNav, MenuButton } from './Header.styles';
import { Button, Logo, StyledIcon } from '../../styles/sharedStyledComponents';

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#destination', label: 'Destination' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#blogs', label: 'Blog' },
  ];

  return (
    <HeaderWrapper>
      <MenuButton icon={faBars} onClick={handleClick} />
      <Logo
        fontSize="2.5rem"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <StyledIcon icon={faPaperPlane} paddingRight="0.5rem" />
        Triplify
      </Logo>
      <CustomNav $isActive={isActive}>
        <ul>
          {links.map((link, index) => (
            <NavLink key={index} href={link.href} label={link.label} />
          ))}
        </ul>
      </CustomNav>

      <Button
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        Book Now
      </Button>
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
      <a
        href={href}
        data-aos="zoom-in-up"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        {label}
      </a>
    </li>
  );
};