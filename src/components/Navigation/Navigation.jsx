import NavItem from './NavItem/NavItem';

const Navigation = () => {
  return (
    <nav>
      <NavItem name="01. Главная" path="/home" />
      <NavItem name="02. О Компании" path="/about-company" />
      <NavItem name="03. Услуги" path="/servises" />
      <NavItem name="04. Запчасти" path="/spares" />
      <NavItem name="05. Контакты" path="/contacts" />
    </nav>
  );
};

export default Navigation;
