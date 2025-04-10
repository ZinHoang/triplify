import {
  Button,
  GridLayout,
  Logo,
  StyledIcon,
} from '../../styles/sharedStyledComponents';
import {
  faPaperPlane,
  faArrowRight,
  faMap,
  faPhone,
  faEnvelope,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF } from 'react-icons/fa';
import { PiGithubLogoFill } from 'react-icons/pi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { RiMessengerFill } from 'react-icons/ri';
import {
  ColumnContainer,
  EmailInput,
  FooterWrapper,
  QuickLink,
  QuickLinksContainer,
  SocialMediaContainer,
} from './Footer.styles';
import { CopyRight } from './CopyRight';

export const Footer = () => {
  const links = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'gallery', label: 'Gallery' },
    { href: 'destination', label: 'Destination' },
    { href: 'services', label: 'Services' },
    { href: 'blogs', label: 'Blogs' },
  ];

  return (
    <>
      <FooterWrapper>
        <GridLayout $columnWidth="25rem">
          <ColumnContainer>
            <Logo fontSize="2.2rem">
              <StyledIcon icon={faPaperPlane} $paddingRight="0.5rem" />
              Triplify
            </Logo>
            <p>
              Explore. Dream. Discover. <br />
              Let Triplify guide you to unforgettable journeys!
            </p>
            <SocialMediaContainer>
              <a href="https://www.facebook.com/zinniz.hoang">
                <FaFacebookF />
              </a>
              <a href="#">
                <RiMessengerFill />
              </a>
              <a href="https://github.com/ZinHoang">
                <PiGithubLogoFill />
              </a>
              <a href="https://www.linkedin.com/in/zinhoang/">
                <BiLogoLinkedin />
              </a>
            </SocialMediaContainer>
          </ColumnContainer>

          <ColumnContainer>
            <h3>Quick Links</h3>
            <QuickLinksContainer>
              {links.map((link) => (
                <QuickLink to={link.href} smooth={true} duration={500}>
                  <StyledIcon icon={faArrowRight} $paddingRight="0.8rem" />{' '}
                  {link.label}
                </QuickLink>
              ))}
            </QuickLinksContainer>
          </ColumnContainer>

          <ColumnContainer>
            <h3>Contact Info</h3>
            <p>
              {' '}
              <StyledIcon icon={faMap} $paddingRight="0.8rem" />
              Address: 1234, Park Avenue, NY
            </p>
            <p>
              {' '}
              <StyledIcon icon={faPhone} $paddingRight="0.8rem" />
              +122-123-456
            </p>
            <p>
              {' '}
              <StyledIcon icon={faEnvelope} $paddingRight="0.8rem" />
              newsletter@gmail.com
            </p>
            <p>
              {' '}
              <StyledIcon icon={faClock} $paddingRight="0.8rem" />
              7:00am - 10:00pm
            </p>
          </ColumnContainer>

          <ColumnContainer>
            <h3>Newsletter</h3>
            <p>Subscribe to get the latest updates</p>
            <form action="">
              <EmailInput type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </form>
          </ColumnContainer>
        </GridLayout>
      </FooterWrapper>
      <CopyRight />
    </>
  );
};
