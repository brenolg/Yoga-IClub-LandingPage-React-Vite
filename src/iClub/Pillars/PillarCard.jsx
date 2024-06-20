import PropTypes from 'prop-types';
import { PillarCardStyles } from './styles';
import ReactCardFlip from 'react-card-flip';
import React from 'react';
import plus from '../../assets/Plus.svg';

export default function PillarCard({
  img, firstPart, title, secondPart, strongTxt, className 
}) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (

    <PillarCardStyles
      className="pillar"
    >
      <h4 className="pillar-title">{title}</h4>

      <ReactCardFlip 
        isFlipped={isFlipped}
        flipSpeedBackToFront={1.3} 
        flipSpeedFrontToBack={1.3}
      >
        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className={`pillar-front ${className}`} aria-label={strongTxt}
        >
          <div className='plus-aba'>
            <img src={plus}></img>
          </div>
        </button>

        <button onClick={() => setIsFlipped(!isFlipped)} type="button" className="pillar-back">
          <p className='pilar-paragraph'>
            <span className='pillar-span'>{strongTxt}</span> {firstPart}
          </p>
          <p className='pilar-paragraph'>
            {secondPart}
          </p>
        </button>
      </ReactCardFlip>
    </PillarCardStyles>

  );
}

PillarCard.propTypes = ({
  isTabletAndMobile: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  strongTxt: PropTypes.string.isRequired,
  firstPart: PropTypes.string.isRequired,
  secondPart: PropTypes.string.isRequired,
});
