import { useMediaQuery } from 'react-responsive';
import cabinet from 'images/hero-bg-about-mob.png';

import s from './HeroAboutBlock.module.css';

const HeroAboutBlock = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <div className={s.heroAboutBlock}>
      <div className={s.heroContent}>
        <h1 className="taglineBig">О компании</h1>
        <h2 className="tagline">О нас</h2>
        <p className="text">
          NNJORDMARINE - это семейный бизнес, основанный на доверии и готовности
          прийти на помощь в трудную минуту. Наша команда специалистов готова к
          запросам любой сложности.
        </p>
        {!isDesktop && <img className={s.img} src={cabinet} alt="cabinet" />}

        <a href="/" className={s.serviceLink}>
          Скачать нашу брошюру
        </a>
      </div>
    </div>
  );
};
export default HeroAboutBlock;
