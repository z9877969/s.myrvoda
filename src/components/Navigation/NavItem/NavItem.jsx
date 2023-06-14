import PropTypes from "prop-types";
import s from "./NavItem.module.css";

const NavItem = ({ name }) => {
  const isActive = false;

  const navItenStyles = [s.NavItem];
  isActive && navItenStyles.push(s.NavItemActive);

  return (
    <a href="/" className={navItenStyles.join(" ")}>
      <span className={s.itemName}>{name}</span>
    </a>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavItem;
