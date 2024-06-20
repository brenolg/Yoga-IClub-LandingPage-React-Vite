import PropTypes from 'prop-types';
import { DoubtCardStyles } from './styles';

export default function DoubtCard({
  question, answer, isMobile, isTablet,
}) {
  const handleQuestionClass = () => {
    if (isMobile) {
      return 'H6';
    }
    if (isTablet) {
      return 'H5';
    }
    return 'H4';
  };
  return (

    <DoubtCardStyles >
      <h4 className={`${handleQuestionClass()} question`}>{question}</h4>
      <p className={`${isMobile ? 'text-md' : 'text-xl'} answer`}>{answer}</p>
    </DoubtCardStyles>
  );
}

DoubtCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};
