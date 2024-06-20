import PropTypes from 'prop-types';
import arow from '../../images/arow.png';
import girlYoga from '../../images/girlYoga.png';
import graphic from '../../images/graphic.png';
import onlineTechs from '../../images/onlineTechs.png';
import AccessCard from './AccessCard';
import { AccessContainer } from './styles';

export default function Access({ isMobile }) {
  return (
    <AccessContainer>
      <div className="access_section " data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="150"
        data-aos-offset="0" >
        <h4 className={` access-title`}>O que terá acesso?</h4>

        <div
          className="main_container"
        >

          <AccessCard
            isMobile={isMobile}
            img={onlineTechs}
            text="Aulas ao vivo toda terça: 8h e 19h30, e quinta: 8h e 9h, com correções e ajustes"
          />

          <AccessCard
            isMobile={isMobile}
            img={graphic}
            text="Aulas com diferentes níveis e durações para não se sentir
            desestimulado"
          />

          <AccessCard
            isMobile={isMobile}
            img={girlYoga}
            text="Módulos desenvolvidos para cultivar disciplina, constância e presença"
          />

          <AccessCard
            isMobile={isMobile}
            img={arow}
            text="Estilos diferentes para variar sua prática: Hatha e Vinyasa"
          />
        </div>
      </div>
    </AccessContainer>
  );
}

Access.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
});
