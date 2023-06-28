import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from './NavItem.module.css';

const NavItem = ({ name, path }) => {
  const isActive = false;

  const navItenStyles = [s.NavItem];
  isActive && navItenStyles.push(s.NavItemActive);

  return (
    <NavLink
      to={path}
      className={navItenStyles.join(' ')}
      activeClassName={s.NavItemActive}
      exact
    >
      <span className={s.itemName}>{name}</span>
    </NavLink>

    // <a href="/" className={navItenStyles.join(' ')}>
    //   <span className={s.itemName}>{name}</span>
    // </a>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavItem;
