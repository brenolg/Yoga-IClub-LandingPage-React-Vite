import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import defaultScrollProps from '../../utils/defaultScrollProps';
import { TextContainerStyle } from './styles';

export default function TextContainer({  isMobile, isTablet }) {


  const handleTitleClass = () => {
    let titleClass = 'H2';
    if (isTablet) {
      titleClass = 'H3';
    }
    if (isMobile) {
      titleClass = 'H4';
    }
    return titleClass;
  };

  return (
    <TextContainerStyle
      className="hero_text"
  
    >
      <h2 className={`${handleTitleClass()} main_title`}>
        Olá, meu nome é Isabella Cayuela, seja muito bem vinda ao nosso espaço de Yoga! 
      </h2>

      <div>
        <p className='text-hero'>
          Você já sabe que está há um passo de encontrar uma vida com mais calma e leveza né?! Mas quero saber se está preparada para além da leveza e calmaria se sentir muito bem com seu corpo e consigo mesma? 
        </p>

      </div>

      <div className="button_container">
        <Link className="link" to="prices" {...defaultScrollProps}>
          <button className="hero-button" type="button">
            Quero começar agora!
          </button>
        </Link>
      </div>
    </TextContainerStyle>
  );
}

TextContainer.propTypes = ({
  isTabletAndMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
});
