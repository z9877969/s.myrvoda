import Header from 'components/Header';
import HeroMainContent from 'components/HeroBlock/HeroMainContent';
import s from './HeroBlock.module.css';

const HeroBlock = () => {
  return (
    <div className={s.heroBlock}>
      {/* <Header /> */}
      <HeroMainContent />
    </div>
  );
};
export default HeroBlock;
