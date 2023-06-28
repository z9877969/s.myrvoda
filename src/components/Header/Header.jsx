import { useEffect, useState } from 'react';

import BigButton from 'common/BigButton';
import Contacts from 'common/Contacts';
import Sidebar from 'components/Sidebar';
import { contactsConfig } from 'data/contacts';
import list from '../../images/List-Right.svg';
import logoHeaderMob from '../../images/Logo-header-mob.svg';
import s from './Header.module.css';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(prevIsOpen => !prevIsOpen);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    // <div className={s.block}>
    <header className={s.mainHeader}>
      {isDesktop ? (
        <>
          <Contacts contactsConfig={contactsConfig} />

          <ul className={s.language}>
            <li>RU</li>
            <li>|</li>
            <li>EN</li>
          </ul>
          <BigButton text="Скачать брошюру" isGray={true} />
        </>
      ) : (
        <>
          <div className={s.headerMob}>
            <img src={logoHeaderMob} alt="logo" />
            <button type="button" className={s.menuBtn} onClick={toggleSidebar}>
              Меню <img src={list} alt="list" />
            </button>
            <Sidebar isOpen={isOpen} />
          </div>
        </>
      )}
    </header>
    // </div>
  );
};

export default Header;
