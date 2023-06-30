import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import Container from 'common/Container';
import AutomationService from 'components/ServicesBlock/AutomationService';
import MaintenanceService from 'components/ServicesBlock/MaintenanceService';
import EnergyService from 'components/ServicesBlock/EnergyService';
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
    id: 'energy',
    text: 'Система энергоэффективности судна',
  },
];

const ServicesListPage = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <div className={s.pageWrapper}>
      <div className={s.taglineWrapper}>
        <h1 className="taglineBig">Услуги</h1>
        {isDesktop && <ServiceList serviceConfig={servicesListConfig} />}
      </div>
      <Container>
        <div className={s.servicesBlock}>
          {isDesktop && (
            <ul>
              {servicesMenu.map(({ text, id }) => (
                <li key={id}>
                  <NavLink to={`/servises/${id}`}>
                    <p>{text}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          <AutomationService />
          <MaintenanceService />
          <EnergyService />
        </div>
      </Container>
    </div>
  );
};

export default ServicesListPage;
