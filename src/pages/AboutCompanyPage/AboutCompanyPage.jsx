import Container from 'common/Container';
import HeroAboutBlock from 'components/HeroAboutBlock';
import AbotFactBlock from 'components/AboutFactBlock';
import OurTeamBlock from 'components/OurTeamBlock';

const AboutCompanyPage = () => {
  return (
    <Container>
      <HeroAboutBlock />
      <AbotFactBlock />
      <OurTeamBlock />
    </Container>
  );
};

export default AboutCompanyPage;
