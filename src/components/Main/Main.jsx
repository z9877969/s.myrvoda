import { Redirect, Route, Switch } from 'react-router-dom';

import AboutCompanyPage from 'pages/AboutCompanyPage';
import ContactsPage from 'pages/ContactsPage';
import FillePage from 'pages/FillePage';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import ServicesListPage from 'pages/ServicesListPage';
// import ServicePage from 'pages/ServicePage';
import SparesPage from 'pages/SparesPage';

// import s from './Main.module.css';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />

        <Route exact path="/home">
          <HomePage />
        </Route>

        <Route exact path="/file">
          <FillePage />
        </Route>

        <Route path="/about-company">
          <AboutCompanyPage />
        </Route>

        {/*--- SERVICES ----------------------*/}
        <Route path="/services">
          <ServicesListPage />
        </Route>

        {/*--- SPARES ------------------------*/}
        <Route path="/spares">
          <SparesPage />
        </Route>

        <Route path="/contacts">
          <ContactsPage />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
