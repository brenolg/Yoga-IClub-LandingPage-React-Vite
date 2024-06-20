import { HeroSubContainer , TextContainer} from './styles';
import divider from '../../assets/DIVISOR.png';


export default function HeroSub() {

  return (
    <HeroSubContainer>
      <div className='sub-hero-sub-img'  alt='sub-hero' data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="150"
        data-aos-offset="0" />
      <TextContainer data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="150"
        data-aos-offset="0" >
        <p className='sub-hero-strong-txt '>Este é um espaço para aquelas que se sentem fora da caixa, que querem abraçar o mundo, resolver mil coisas de uma vez mas precisam de um tempo para desacelerar e organizar não só as ideias e a cabeça mas algumas prioridades também! 
        </p>
        <p className='sub-hero-normal-txt'>Nossas aulas irão te conduzir numa jornada de práticas e filosofia que elevarão seus dias te ajudando a ter maior equilíbrio emocional, disciplina e disposição para lidar com as demandas da vida cotidiana além de te devolver a vontade de fazer a vida acontecer. </p>
        <p className='sub-hero-normal-txt'>Aqui o cuidado com o corpo e mente é o nosso compromisso inegociável com nossa própria Alma. Você é seu maior recurso, para cuidar do mundo é preciso cuidar de você antes! 🪬</p>
      </TextContainer>
              
      <img className='divider-hero' src={divider} alt=''/>
    </HeroSubContainer>
  );
}

