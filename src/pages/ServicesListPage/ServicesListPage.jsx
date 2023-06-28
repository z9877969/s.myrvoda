import AutomationService from 'components/ServicesBlock/AutomationService';
import Container from 'common/Container';
import EnergyService from 'components/ServicesBlock/EnergyService';
import Header from 'components/Header/Header';
import MaintenanceService from 'components/ServicesBlock/MaintenanceService';
import { NavLink } from 'react-router-dom';
import ServiceList from 'components/ServicesBlock/ServiceList';
import s from './ServicesListPage.module.css';
import { servicesListConfig } from 'data/services-list';

const servicesMenu = [
  {
    id: 'automation',
    text: 'Автоматизация процессов на судне',
  },
  {
    id: 'maintenance',
    text: 'Техническое обслуживание',
  },
  {
    id: 'energy-efficiency',
    text: 'Система энергоэффективности судна',
  },
];

const ServicesListPage = () => {
  return (
    <div className={s.pageWrapper}>
      <Container>
        {/* <Header /> */}
        <div className={s.servicesBlock}>
          <h1 className="taglineBig">Услуги</h1>

          <ServiceList serviceConfig={servicesListConfig} />

          <ul>
            {servicesMenu.map(({ text, id }) => (
              <li key={id}>
                <NavLink to={`/servises/${id}`}>
                  <p>{text}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          <AutomationService />
          <MaintenanceService />
          <EnergyService />
        </div>
      </Container>
    </div>
  );
};

export default ServicesListPage;
