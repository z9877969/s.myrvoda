// import { Redirect, Route, Switch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import AboutCompanyPage from 'pages/AboutCompanyPage';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import ServicesListPage from 'pages/ServicesListPage';
// import ServicePage from 'pages/ServicePage';
import SparesPage from 'pages/SparesPage';
import ServicePage from 'pages/ServicePage';

// import s from './Main.module.css';

const Main = () => {
  return (
    <main>
      <Switch>
        {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/about-company">
          <AboutCompanyPage />
        </Route>

        {/*--- SERVICES ----------------------*/}
        <Route path="/services">
          <ServicesListPage />
        </Route>

        <Route exact path="/services/:id">
          <ServicePage />
        </Route>

        {/*--- SPARES ------------------------*/}
        <Route path="/spares">
          <SparesPage />
        </Route>

        <Route path="/contacts">
          <ContactsPage />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
