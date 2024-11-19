import React from 'react';
import {
  Card,
  GridContainer,
  HeadingContainer,
  PrimaryHeading,
  StyledIcon,
  TitleSpan,
} from '../../styles/sharedStyledComponents';
import HaLongBay from '../../assets/images/HaLong-bay.jpg';
import MountainVietnam from '../../assets/images/mountain-Vietnam.jpg';
import QueenstownNz from '../../assets/images/Queenstown-NZ.jpg';
import RuralVietnam from '../../assets/images/rural-Vietnam.jpg';
import RuralSunset from '../../assets/images/rural-sunset.jpg';
import TaiwanBuddha from '../../assets/images/Taiwan-Buddha.jpg';
import UnderOceanDolphin from '../../assets/images/under-ocean-dophin.jpg';
import KayakThroughCave from '../../assets/images/kayak-through-cave.jpg';
import MountainNZ from '../../assets/images/mountain-NZ.jpg';
import BeachWave from '../../assets/images/beach-wave.jpg';
import GreenAurora from '../../assets/images/green-Aurora.jpg';
import BirdWithMountainBackground from '../../assets/images/bird-with-moutain-background.jpg';
import { ImageContainer, Image, ContentContainer } from './Destination.styles';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const Destination = () => {
  return (
    <>
      <HeadingContainer>
        <TitleSpan>Our Favorite Places</TitleSpan>
        <PrimaryHeading>Your journey begins here</PrimaryHeading>
      </HeadingContainer>

      <GridContainer columnWidth="27rem">
        <Card>
          <ImageContainer>
            <Image src={UnderOceanDolphin} alt="Dophin in the ocean" />
          </ImageContainer>
          <ContentContainer>
            <h3>Paradise in the Bahamas</h3>
            <p>Swim alongside these friendly dolphins.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src={HaLongBay} alt="Ha Long Bay in Vietnam" />
          </ImageContainer>
          <ContentContainer>
            <h3>Ha Long bay</h3>
            <p>Explore emerald waters and towering limestone cliffs.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>

        <Card>
          <ImageContainer>
            <Image src={RuralSunset} alt="rural sunset in New Zealand" />
          </ImageContainer>
          <ContentContainer>
            <h3>New Zealand's rural sunset</h3>
            <p>Witness breathtaking rural landscapes at dusk.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src={QueenstownNz} alt="marvelous view in Queenstown NZ" />
          </ImageContainer>
          <ContentContainer>
            <h3>Queenstown, New Zealand</h3>
            <p>Experience adventure and serenity in this stunning town.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src={RuralVietnam} alt="rural in Vietnam" />
          </ImageContainer>
          <ContentContainer>
            <h3>Rural Charm of Vietnam</h3>
            <p>Discover Vietnam's picturesque countryside villages.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image
              src={TaiwanBuddha}
              alt="gigantic Buddha statue in a Taiwanese temple"
            />
          </ImageContainer>
          <ContentContainer>
            <h3>Fo Guang Shan Temple, Taiwan</h3>
            <p>Marvel at the serenity of Taiwan's monumental Buddha.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image
              src={KayakThroughCave}
              alt="kayaking through Phong Nha cave"
            />
          </ImageContainer>
          <ContentContainer>
            <h3>Phong Nha Caves</h3>
            <p>Explore Vietnam's majestic Phong Nha caves by kayak.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src={MountainVietnam} alt="mountain in Vietnam" />
          </ImageContainer>
          <ContentContainer>
            <h3>Ninh Binh, Vietnam</h3>
            <p>Venture through Vietnam's rugged mountain landscapes.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src={BeachWave} alt="beach" />
          </ImageContainer>
          <ContentContainer>
            <h3>Tulum, Mexico</h3>
            <p>Relax by the shore and enjoy the rhythmic waves.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src={GreenAurora} alt="green Aurora" />
          </ImageContainer>
          <ContentContainer>
            <h3>Aurora, Iceland</h3>
            <p>Be captivated by Iceland's enchanting northern lights.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image
              src={BirdWithMountainBackground}
              alt="bird with mountain background"
            />
          </ImageContainer>
          <ContentContainer>
            <h3>The Nature</h3>
            <p>Admire serene landscapes where nature meets the sky.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image src={MountainNZ} alt="mountain landscapes in New Zealand" />
          </ImageContainer>
          <ContentContainer>
            <h3>Mountain Peaks, New Zealand</h3>
            <p>Discover the towering peaks of New Zealand's mountains.</p>
            <a href="#">
              Read more <StyledIcon icon={faAngleRight} />
            </a>
          </ContentContainer>
        </Card>
      </GridContainer>
    </>
  );
};
