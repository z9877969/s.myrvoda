import { useMediaQuery } from 'react-responsive';
import cabinet from 'images/hero-bg-about-mob.png';
import s from './HeroAboutMainContent.module.css';

const HeroAboutMainContent = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div className={s.heroContent}>
      <div>
        <h1 className="taglineBig">О компании</h1>

        <h2 className="tagline">О нас</h2>
        <p className={s.description}>
          NNJORDMARINE - это семейный бизнес, основанный на доверии и готовности
          прийти на помощь в трудную минуту. Наша команда специалистов готова к
          запросам любой сложности.
        </p>
      </div>
      {!isDesktop && <img src={cabinet} alt="cabinet" />}

      <a href="/" className={s.serviceLink}>
        Скачать брошюру
      </a>
    </div>
  );
};

export default HeroAboutMainContent;
