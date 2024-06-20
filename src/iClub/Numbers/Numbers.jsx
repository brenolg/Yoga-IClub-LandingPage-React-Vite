import { NumberCard, NumberContainer  } from './styles';

export default function Numbers() {


  return (
    <NumberContainer 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="150"
        data-aos-offset="0" >
      <h4 className='numbers-main-title'>De todos os nossos praticantes presenciais e online ao redor do mundo: </h4>
      <div className='numbers-sub-container'>
      <NumberCard>
        <span className='percent-number'>81%</span>
        <p className='percent-text'>sentiram que as dores diminuíram drasticamente</p>
      </NumberCard>
      <NumberCard>
        <span className='percent-number'>72%</span>
        <p className='percent-text'>
          melhoram o humor durante o dia e a produtividade</p>
      </NumberCard>
      <NumberCard>
        <span className='percent-number'>79%</span>
        <p className='percent-text'>
          melhoraram o relacionamento consigo e com o outro</p>
      </NumberCard>
      <NumberCard>
        <span className='percent-number'>88%</span>
        <p className='percent-text'>
          têm menos estresse e estão mais equilibrados emocionalmente</p>
      </NumberCard>
      <NumberCard>
        <span className='percent-number'>86%</span>
        <p className='percent-text'>
          dormem melhor e reconheceram que precisavam desacelerar</p>
      </NumberCard>
      </div>
    </NumberContainer>
  );
}

