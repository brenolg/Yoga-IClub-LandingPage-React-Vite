
import ReviewsContainer from './styles';
import PropTypes from 'prop-types';
import client1 from '../../images/clients/client1.png'
import client2 from '../../images/clients/client2.png'
import client3 from '../../images/clients/client3.png'
import star from '../../assets/Star.png'

export default function Reviews({ isTabletAndMobile, isMobile }) {

  return (
    <ReviewsContainer isTabletAndMobile={isTabletAndMobile} id="students"
    data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="150"
        data-aos-offset="0">
      <h4 className={`reviews-main-title`}  >
        O que o alunos estão dizendo:
      </h4>

      <div className='reviews-sub-container'>
        <div className='review-card'>
          <img className='review-img' src={client1}/>
          <p className='review-text'>Começar a fazer Yoga na pandemia  foi a melhor escolha que fiz. O Yoga me ajuda a estar mais presente no agora e assim acalmar a ansiedade do dia a dia. 🧘🏼‍♀️</p>
          <div>
            <h5 className='review-name'>- Marina Lavalle - </h5>
            <div className='stars-container'>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </div>
          </div>
        </div>

        <div className='review-card'>
          <img className='review-img' src={client3}/>
          <p className='review-text'>As práticas com a Isa são pra mim momentos de exercitar o corpo, acalmar a mente, praticar a gratidão, o autoconhecimento e o autocuidado.</p>
          <div>
            <h5 className='review-name'>- Luisa Kfouri -</h5>
            <div className='stars-container'>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </div>
          </div>
        </div>

        <div className='review-card'>
          <img className='review-img' src={client2}/>
          <p className='review-text'>É notável o quanto evolui com a prática online! Pratico com intensidades variadas e a Bella está sempre disposta a ajudar quando surgem dúvidas.</p>
          <div>
            <h5 className='review-name'>- Dani Morais -</h5>
            <div className='stars-container'>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </div>
          </div>
        </div>

      </div>
    </ReviewsContainer>
  );
}

Reviews.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
});
