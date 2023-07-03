import BigButton from 'common/BigButton';
import Contacts from 'common/Contacts';
import Logo from 'images/Logo.svg';
import Navigation from '../Navigation/Navigation';
import clsx from 'clsx';
import { contactsConfig } from 'data/contacts';
import { navConfig } from 'data/navigation';
import s from './Sidebar.module.css';
import { useMediaQuery } from 'react-responsive';

const Sidebar = ({ isOpen }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const logo1 = Logo;

  return (
    <div className={clsx(s.sidebar, isOpen && s.isOpen)}>
      {isDesktop && (
        <div className={s.logo}>
          <img src={logo1} alt="logo" />
        </div>
      )}
      <>
        <Navigation navConfig={navConfig} />

        {!isDesktop && (
          <>
            <BigButton text="Скачать брошюру" isGray={true} />
            <Contacts contactsConfig={contactsConfig} />
          </>
        )}
      </>
    </div>
  );
};
export default Sidebar;
