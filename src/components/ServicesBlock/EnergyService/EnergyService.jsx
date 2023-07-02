import {
  Redirect,
  Route,
  Switch,
  useRouteMatch,
  NavLink,
} from 'react-router-dom';

import EnergyMenu from './EnergyMenu';
import OnBoard from './OnBoard';
import Focus from './Focus';
import Office from './Office';

import s from './EnergyService.module.css';

const EnergyService = () => {
  const match = useRouteMatch();

  return (
    <div className={s.blockWrapper}>
      <EnergyMenu />

      <Switch>
        <Route path={`${match.path}/on-board`}>
          <OnBoard />
        </Route>
        <Route path={`${match.path}/focus`}>
          <Focus />
        </Route>
        <Route path={`${match.path}/office`}>
          <Office />
        </Route>
      </Switch>
    </div>
  );
};

export default EnergyService;
