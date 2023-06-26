import AdvantagesList from './AdvantagesList';
import { advantagesConfig } from 'data/advantages';
import s from './AdvantagesBlock.module.css';

const AdvantagesBlock = () => {
  return (
    <div className={s.advantagesBlock}>
      <div className={s.text}>
        <p className="headingBlock">Наши конкурентные преимущества</p>
        <h2 className="tagline">Что вы можете ожидать от нас</h2>
      </div>
      <AdvantagesList advantagesConfig={advantagesConfig} />
    </div>
  );
};

export default AdvantagesBlock;
