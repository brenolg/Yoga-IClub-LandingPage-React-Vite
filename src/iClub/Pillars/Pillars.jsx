import PropTypes from 'prop-types';
import pillarFirst from '../../assets/pillarFirst.png'
import pillarSecond from '../../assets/pillarSecond.png'
import pillarThird from '../../assets/pillarThird.png'
import PillarCard from './PillarCard';
import { PillarsContainer } from './styles';
import { Link } from 'react-scroll';
import defaultScrollProps from '../../utils/defaultScrollProps';

export default function Pillars({ isMobile, isTabletAndMobile }) {
  return (
    <PillarsContainer  
      isMobile={isMobile} id="iclub"             data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="150" 
      data-aos-offset="0" 
    >

      <span className='pillar-question'>Você deve estar se perguntando...</span>
      <h3 className={`pillar-main-title`}>Será que as aulas são mesmo pra mim?</h3>

      <div className="pillars_container">

        <PillarCard
          isTabletAndMobile={isTabletAndMobile}
          img={pillarFirst}
          title="Iniciantes"
          strongTxt='Iniciante:'
          firstPart="aulas exclusivas para quem está começando ou nunca praticou."
          secondPart="Práticas bem detalhadas e mais explicativas para se sentir seguro, confiante e evoluir em sua jornada."
          className='first'
        />

        <PillarCard
          isTabletAndMobile={isTabletAndMobile}
          img={pillarSecond}
          title="Avançados"
          strongTxt='Intermediário:'
          firstPart="práticas mais longas e intensas, ásanas desafiadores, pranayamas mais avançados e meditações profundas."
          secondPart="Aulas desenvolvidas para aperfeiçoar a sua técnica e lapidar sua prática."
          className='second'
        />

        <PillarCard
          img={pillarThird}
          title="Avançados"
          strongTxt='Avançado:'
          firstPart="aulas completas onde mergulharemos em todas as técnicas milenares do yoga com profundidade."
          secondPart="Ásanas, pranayamas, kriya purificação, mudras, laya entre outras técnicas que farão das suas práticas e meditações seu momento favorito do dia."
          className='third'
        />
      </div>
      <p className='pillar-main-text'>Já se imaginou tendo mais clareza na mente e paz no coração, menos ansiedade e estresse e mais vontade e energia para fazer a vida acontecer?
      Na sua primeira aula você já perceberá os benefícios da prática!</p>
      
      <Link className="pillar-main-button"  to="prices" {...defaultScrollProps} >
          quero começar agora!
      </Link>
    </PillarsContainer>
  );
}

Pillars.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
});
