import {
  Redirect,
  Route,
  Switch,
  useRouteMatch,
  NavLink,
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Container from 'common/Container';
import AutomationService from 'components/ServicesBlock/AutomationService';
import MaintenanceService from 'components/ServicesBlock/MaintenanceService';
import EnergyService from 'components/ServicesBlock/EnergyService';
import ServiceListMenu from 'components/ServicesBlock/ServiceList/ServiceListMenu';
import { servicesListConfig } from 'data/services-list';
import s from './ServicesListPage.module.css';

const ServicesListPage = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const match = useRouteMatch();

  return (
    <div className={s.pageWrapper}>
      <div className={s.taglineWrapper}>
        <h1 className="taglineBig">Услуги</h1>
        {isDesktop && (
          <ServiceListMenu servicesListConfig={servicesListConfig} />
        )}

        {/* <NavLink to={`${match.url}/automation`}>automation</NavLink>
        <NavLink to={`${match.url}/maintenance`}>maintenance</NavLink>
        <NavLink to={`${match.url}/energy`}>energy</NavLink> */}
      </div>

      <Container>
        <div className={s.servicesBlock}>
          <Switch>
            {/* <Route
              exact
              path="/services"
              render={() => <Redirect to="/services/automation" />}
            /> */}

            {/* path='/services/automation' */}
            <Route path={`${match.path}/automation`}>
              <AutomationService />
            </Route>
            <Route path={`${match.path}/maintenance`}>
              <MaintenanceService />
            </Route>
            <Route path={`${match.path}/energy`}>
              <EnergyService />
            </Route>
          </Switch>
        </div>
      </Container>
    </div>
  );
};

export default ServicesListPage;
