import { useMediaQuery } from 'react-responsive';
import BigButton from 'common/BigButton';
import logoHeaderMob from '../../images/Logo-header-mob.svg';
import list from '../../images/List-Right.svg';
import s from './Header.module.css';

const Header = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <div className={s.block}>
      <header className={s.mainHeader}>
        {!isDesktop && (
          <div className={s.headerMob}>
            <img src={logoHeaderMob} alt="logo" />
            <button type="button" className={s.menuBtn}>
              Меню <img src={list} alt="list" />
            </button>
          </div>
        )}

        {isDesktop && (
          <>
            <ul className={s.list}>
              <li className={s.phone}>
                <a href="tel:+37258667396">+372 5866 7196</a>
              </li>
              <li className={s.mail}>
                <a href="mailto:sales@njordmarine.eu">sales@njordmarine.eu</a>
              </li>
            </ul>
            <ul className={s.language}>
              <li>RU</li>
              <li>|</li>
              <li>EN</li>
            </ul>
            <BigButton text="Скачать брошюру" isGray={true} />
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
