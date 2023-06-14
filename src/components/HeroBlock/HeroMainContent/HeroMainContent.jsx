import BigButton from 'common/BigButton';
import s from './HeroMainContent.module.css';

const HeroMainContent = () => {
  return (
    <div className={s.heroContent}>
      <p className={s.head}>
        Европейская компания с высококачественными решениями
      </p>
      <p className={s.tagline}>
        Ваш надежный <br /> помощник <br />
        по сервису судов
      </p>
      <p className={s.description}>
        NJORDMARINE заботится о своих клиентах и ​​ценит их время, поэтому мы
        предоставляем необходимое оборудование, оригинальные и OEM запчасти, а
        также сервисное обслуживание <br /> в кратчайшие сроки и по разумной
        цене.
      </p>
      <div className={s.nav}>
        <BigButton text="Оставить заявку" />
        <a href="/" className={s.serviceLink}>
          Ознакомиться с услугами
        </a>
      </div>
      <ul className={s.list}>
        <li>
          <p className={s.top}>800+</p>
          <p className={s.bot}>Выполненных проектов</p>
        </li>
        <li>
          <p className={s.top}>5 лет</p>
          <p className={s.bot}>На рынке</p>
        </li>
        <li>
          <p className={s.top}>20</p>
          <p className={s.bot}>Стран</p>
        </li>
      </ul>
    </div>
  );
};

export default HeroMainContent;
