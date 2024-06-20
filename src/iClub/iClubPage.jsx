import { useMediaQuery } from 'react-responsive';
import About from './About/About';
import Doubts from './Doubts/Doubts';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Pillars from './Pillars/Pillars';
import Prices from './Prices/Prices';
import Reviews from './Reviews/Reviews';
import Numbers from './Numbers/Numbers';
import Access from './Access/Access';
import HeroSub from './HeroSub/HeroSub';
import Seal from './Seal/Seal';

function IClubPage() {
  const isTabletAndMobile = useMediaQuery({ query: '(max-width: 960px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
  const isTablet = useMediaQuery({ minWidth: 550, maxWidth: 960 });

  const devicesProps = {
    isTabletAndMobile,
    isMobile,
    isTablet,
  };

  return (
    <>
      <Header {...devicesProps} />
      <Hero {...devicesProps} />
      <HeroSub {...devicesProps} />
      <Pillars {...devicesProps} />
      <Numbers {...devicesProps} />
      <Access {...devicesProps}/>
      <Reviews {...devicesProps} />
      <Prices {...devicesProps} />
      <Doubts {...devicesProps} />
      <Seal {...devicesProps} />
      <About {...devicesProps} />
      <Footer {...devicesProps} />
    </>
  );
}

export default IClubPage;
