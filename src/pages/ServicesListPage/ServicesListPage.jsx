import { NavLink } from 'react-router-dom';
import Container from 'common/Container';
import Header from 'components/Header/Header';
import AutomationService from 'components/ServicesBlock/AutomationService';
import MaintenanceService from 'components/ServicesBlock/MaintenanceService';
import EnergyService from 'components/ServicesBlock/EnergyService';

import ServiceList from 'components/ServicesBlock/ServiceList';
import { servicesListConfig } from 'data/services-list';
import s from './ServicesListPage.module.css';

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
    <Container>
      <Header />
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
  );
};

export default ServicesListPage;
