import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { contactsConfig } from 'data/contacts';
import BigButton from 'common/BigButton';
import Contacts from 'common/Contacts';
import Sidebar from 'components/Sidebar';
import logoHeaderMob from '../../images/Logo-header-mob.svg';
import list from '../../images/List-Right.svg';
import s from './Header.module.css';

const Header = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(prevIsOpen => !prevIsOpen);

  return (
    <div className={s.block}>
      <header className={s.mainHeader}>
        {!isDesktop && (
          <div className={s.headerMob}>
            <img src={logoHeaderMob} alt="logo" />
            <button type="button" className={s.menuBtn} onClick={toggleSidebar}>
              Меню <img src={list} alt="list" />
            </button>
          </div>
        )}

        {!isDesktop && isOpen && <Sidebar />}

        {isDesktop && (
          <>
            <Contacts contactsConfig={contactsConfig} />

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
