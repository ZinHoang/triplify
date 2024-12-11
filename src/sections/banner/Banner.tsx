import { Button } from '../../styles/sharedStyledComponents';
import { BannerWraper } from './Banner.styles';

export const Banner = () => {
  return (
    <BannerWraper>
      <span>NEXT STOP ?</span>
      <h3>Let's ignite your inner explorer</h3>
      <p>
        Whether it's breathtaking landscapes or vibrant cultures, Triplify turns
        dreams into destinations.
      </p>
      <Button>Book now</Button>
    </BannerWraper>
  );
};
