import { Link } from 'react-scroll';
import instagram from '../../images/instagram.svg';
import whatsapp from '../../images/whatsapp.svg';
import yogaLogo from '../../images/yoga_iclub.svg';
import youtube from '../../images/youtube.svg';
import defaultScrollProps from '../../utils/defaultScrollProps';
import FooterContainer from './styles';
import { GoHome } from "react-icons/go";

export default function Footer(isMobile) {
  return (
    <FooterContainer isMobile={isMobile}>
        <nav className="social-links-footer">
          <a 
            href="https://www.instagram.com/isabellacayuela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=5531996793158"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>

          <a
            href="https://www.youtube.com/@isabellacayuelayoga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
          <a
            href="https://yogaiclub.isabellacayuela.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoHome className='home-icon' />
          </a>
        </nav>

        <Link className="" to="prices" {...defaultScrollProps}>
          <img className="logo" src={yogaLogo} alt="yoga-logo" />
        </Link>
  

    </FooterContainer>

  );
}
