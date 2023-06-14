import { navConfig } from 'data/navigation';
// import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Logo from 'images/Logo.svg';
import s from './Sidebar.module.css';

const Sidebar = () => {
  const logo1 = Logo;
  return (
    <div className={s.sidebar}>
      <div className={s.logo}>
        {/* <Link className={s.logo} to="/"> */}
        <img src={logo1} alt="logo" />
        {/* </Link> */}
      </div>
      <div>
        <Navigation navConfig={navConfig} />
      </div>
    </div>
  );
};
export default Sidebar;
