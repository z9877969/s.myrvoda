import { useMediaQuery } from 'react-responsive';
import AdvantagesList from './AdvantagesList';
import { advantagesConfig } from 'data/advantages';
import s from './AdvantagesBlock.module.css';
// import BigButton from 'common/BigButton/BigButton';
import SendInfo from 'common/SendInfo';

const AdvantagesBlock = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <div className={s.advantagesBlock}>
      <div className={s.textBlock}>
        <p className="headingBlock">Наши конкурентные преимущества</p>
        <h2 className="tagline">Что вы можете ожидать от нас</h2>
      </div>
      <AdvantagesList advantagesConfig={advantagesConfig} />

      {!isDesktop && <SendInfo linkName="" linkPath="" hideLink={true} />}
    </div>
  );
};

export default AdvantagesBlock;
