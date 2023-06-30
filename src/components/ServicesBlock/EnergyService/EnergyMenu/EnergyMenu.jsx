import MenuItem from './MenuItem';
import s from './EnergyMenu.module.css';

const EnergyMenu = () => {
  return (
    <nav className={s.nav}>
      <MenuItem name="Решение на борту" path="/servises/energy/on-board" />
      <MenuItem name="Система FOCUS для флота" path="/servises/energy/focus" />
      <MenuItem name="Офисное решение" path="/servises/energy/office" />
    </nav>
  );
};

export default EnergyMenu;
