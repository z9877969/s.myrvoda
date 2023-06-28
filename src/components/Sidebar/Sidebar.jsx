import { useMediaQuery } from 'react-responsive';
import { navConfig } from 'data/navigation';
import { contactsConfig } from 'data/contacts';
// import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Contacts from 'common/Contacts';
import BigButton from 'common/BigButton';
import Logo from 'images/Logo.svg';
import s from './Sidebar.module.css';

const Sidebar = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const logo1 = Logo;
  return (
    <div className={s.sidebar}>
      {isDesktop && (
        <div className={s.logo}>
          {/* <Link className={s.logo} to="/"> */}
          <img src={logo1} alt="logo" />
          {/* </Link> */}
        </div>
      )}
      <div>
        <Navigation navConfig={navConfig} />

        {!isDesktop && (
          <>
            <BigButton text="Скачать брошюру" isGray={true} />
            <Contacts contactsConfig={contactsConfig} />
          </>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
