import PropTypes from 'prop-types';
import { AccessCardStyles } from './styles';

export default function AccessCard({
  isMobile, img, text,
}) {
  return (

    <AccessCardStyles
      className="pillar"
    >
      <img alt="tech-img" src={img} />

      <p className={isMobile ? 'text-sm' : 'text-md'}>
        {text}
      </p>
    </AccessCardStyles>
  );
}

AccessCard.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});
