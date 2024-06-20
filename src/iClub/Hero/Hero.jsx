import PropTypes from 'prop-types';
import TextContainer from './TextContainer';
import { HeroContainer } from './styles';
import divider from '../../assets/DIVISOR.png';

export default function Hero({ isTabletAndMobile, isMobile, isTablet }) {

  return (
    <HeroContainer  id="start">
      <TextContainer
        isTabletAndMobile={isTabletAndMobile}
        isMobile={isMobile}
        isTablet={isTablet}
      />
      <div className='hero-color-bg '></div>
      <img className='divider-hero' src={divider} alt=''/>
    </HeroContainer>
  );
}

Hero.propTypes = ({
  isTabletAndMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
});
