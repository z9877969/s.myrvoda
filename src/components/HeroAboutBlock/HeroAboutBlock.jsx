import Header from 'components/Header';
import HeroAboutMainContent from './HeroAboutMainContent';

import s from './HeroAboutBlock.module.css';

const HeroAboutBlock = () => {
  return (
    <div className={s.heroAboutBlock}>
      <Header />
      <HeroAboutMainContent />
    </div>
  );
};
export default HeroAboutBlock;
