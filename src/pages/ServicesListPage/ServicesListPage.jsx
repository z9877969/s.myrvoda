import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Container from 'common/Container';
import BlockNavigation from 'components/BlockNavigation';
import AutomationService from 'components/ServicesBlock/AutomationService';
import MaintenanceService from 'components/ServicesBlock/MaintenanceService';
import EnergyService from 'components/ServicesBlock/EnergyService';
import { servicesListConfig } from 'data/services-list';
import s from './ServicesListPage.module.css';

const ServicesListPage = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const match = useRouteMatch();

  return (
    <div className={s.pageWrapper}>
      <div className={s.taglineWrapper}>
        <h1 className="taglineBig">Услуги</h1>
        {isDesktop && <BlockNavigation navConfig={servicesListConfig} />}
      </div>

      <Container>
        <div className={s.pagesBlock}>
          <Switch>
            <Route
              exact
              path={`${match.path}`}
              render={() => <Redirect to={`${match.path}/automation`} />}
            />

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
