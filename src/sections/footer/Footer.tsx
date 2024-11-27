import React from 'react';
import {
  Button,
  GridContainer,
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
  QuickLinksContainer,
  SocialMediaContainer,
} from './Footer.styles';

export const Footer = () => {
  return (
    <FooterWrapper>
      <GridContainer columnWidth="25rem">
        <ColumnContainer>
          <Logo fontSize="2.2rem">
            <StyledIcon icon={faPaperPlane} paddingRight="0.5rem" />
            Triplify
          </Logo>
          <p>
            Explore. Dream. Discover. <br />
            Let Triplify guide you to unforgettable journeys!
          </p>
          <SocialMediaContainer>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <RiMessengerFill />
            </a>
            <a href="#">
              <PiGithubLogoFill />
            </a>
            <a href="#">
              <BiLogoLinkedin />
            </a>
          </SocialMediaContainer>
        </ColumnContainer>

        <ColumnContainer>
          <h3>Quick Links</h3>
          <QuickLinksContainer>
            <a href="#home">
              <StyledIcon icon={faArrowRight} paddingRight="0.8rem" /> Home
            </a>
            <a href="#about">
              <StyledIcon icon={faArrowRight} paddingRight="0.8rem" /> About
            </a>
            <a href="#destination">
              <StyledIcon icon={faArrowRight} paddingRight="0.8rem" />{' '}
              Destination
            </a>
            <a href="#services">
              <StyledIcon icon={faArrowRight} paddingRight="0.8rem" /> Services
            </a>
            <a href="#gallery">
              <StyledIcon icon={faArrowRight} paddingRight="0.8rem" /> Gallery
            </a>
            <a href="#blogs">
              <StyledIcon icon={faArrowRight} paddingRight="0.8rem" /> Blogs
            </a>
          </QuickLinksContainer>
        </ColumnContainer>

        <ColumnContainer>
          <h3>Contact Info</h3>
          <p>
            {' '}
            <StyledIcon icon={faMap} paddingRight="0.8rem" />
            Address: 1234, Park Avenue, NY
          </p>
          <p>
            {' '}
            <StyledIcon icon={faPhone} paddingRight="0.8rem" />
            +122-123-456
          </p>
          <p>
            {' '}
            <StyledIcon icon={faEnvelope} paddingRight="0.8rem" />
            newsletter@gmail.com
          </p>
          <p>
            {' '}
            <StyledIcon icon={faClock} paddingRight="0.8rem" />
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
      </GridContainer>
    </FooterWrapper>
  );
};
