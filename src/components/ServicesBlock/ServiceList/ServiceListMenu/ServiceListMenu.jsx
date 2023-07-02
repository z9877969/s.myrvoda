import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import s from './ServiceListMenu.module.css';

// imgUrl, name, alt, path

const ServiceListMenu = ({ servicesListConfig }) => {
  return (
    <ul className={s.nav}>
      {servicesListConfig.map(({ imgUrl, name, alt, to }, index) => (
        <li key={index}>
          <MenuItem imgUrl={imgUrl} name={name} alt={alt} to={to} />
        </li>
      ))}
    </ul>

    // <nav className={s.nav}>
    //   <MenuItem
    //     name="Автоматизация процессов на судне"
    //     path="/services/automation"
    //   />
    //   <MenuItem name="Техническое обслуживание" path="/services/maintenance" />
    //   <MenuItem
    //     name="Система энергоэффективности судна"
    //     path="/services/energy"
    //   />
    // </nav>
  );
};

ServiceListMenu.propTypes = {
  servicesListConfig: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      name: PropTypes.string,
      to: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default ServiceListMenu;
