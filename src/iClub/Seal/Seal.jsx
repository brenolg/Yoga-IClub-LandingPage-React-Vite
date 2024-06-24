import SealContainer from "./styles";
import SealImg from "../../assets/Selo.png";
import Elipse from "../../assets/EllipseSeal.png";
import { Link } from "react-scroll";

export default function Seal() {
  return (
    <SealContainer
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="150"
      data-aos-offset="0"
    >
      <div className="seal-container">
        <img src={SealImg} className="seal-img" />
        <p className="seal-text">
          Nós do Yoga iClub criamos o <span>7payback</span>, que da a você 7
          dias para solicitar seu reembolso sem questionamento ou burocracia
          alguma caso não esteja satisfeito com o produto.
        </p>
      </div>
      <img src={Elipse} className="seal-elipse" />
      <Link className="seal-button" to="prices">
        quero começar agora!
      </Link>
    </SealContainer>
  );
}
