import { aboutFactConfig } from 'data/about-fact';
import { useMediaQuery } from 'react-responsive';
import AboutFactList from './AboutFactList';
import BigButton from 'common/BigButton';
import s from './AboutFactBlock.module.css';
import ScrollUp from 'common/ScrollUp/ScrollUp';

const AbotFactBlock = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div className={s.aboutFactBlock}>
      <div className={s.taglineAbout}>
        <p className="tagline">
          3 факта о нашей компании, <br /> которые вас заинтересуют
        </p>
      </div>
      <AboutFactList aboutFactConfig={aboutFactConfig} />

      <div className={s.contacts}>
        <BigButton text="Контакты" />
        <a href="/" className={s.link}>
          Ознакомиться с услугами
        </a>
      </div>

      {!isDesktop && <ScrollUp />}
    </div>
  );
};

export default AbotFactBlock;
