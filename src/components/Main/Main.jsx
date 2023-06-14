import { useMediaQuery } from 'react-responsive';
import Container from 'common/Container';
import HeroBlock from 'components/HeroBlock';
import ServicesBlock from 'components/ServicesBlock';
// import s from './Main.module.css';

const Main = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <Container>
      <HeroBlock />
      <ServicesBlock />
    </Container>
  );
};

export default Main;
