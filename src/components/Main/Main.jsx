// import { useMediaQuery } from 'react-responsive';
import Container from 'common/Container';
import HeroBlock from 'components/HeroBlock';
import ServicesBlock from 'components/ServicesBlock';
import AdvantagesBlock from 'components/AdvantagesBlock';
import GeoBlock from 'components/GeoBlock';
import Footer from 'components/Footer';
// import s from './Main.module.css';

const Main = () => {
  // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <Container>
        <HeroBlock />
        <ServicesBlock />
        <AdvantagesBlock />
        <GeoBlock />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
