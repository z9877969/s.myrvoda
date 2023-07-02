import MenuItem from './MenuItem';
import s from './EnergyMenu.module.css';

const EnergyMenu = () => {
  return (
    <nav className={s.nav}>
      <MenuItem name="Решение на борту" to="on-board" />
      <MenuItem name="Система FOCUS для флота" to="focus" />
      <MenuItem name="Офисное решение" to="office" />
    </nav>
  );
};

export default EnergyMenu;
