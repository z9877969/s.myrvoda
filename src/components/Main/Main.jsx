// import { useMediaQuery } from 'react-responsive';
import { Redirect, Route, Switch } from 'react-router-dom';

import AboutCompanyPage from 'pages/AboutCompanyPage';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import ServicesListPage from 'pages/ServicesListPage';
// import ServicePage from 'pages/ServicePage';
import SparesPage from 'pages/SparesPage';

// import s from './Main.module.css';

const Main = () => {
  // const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

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

        <Route path="/servises">
          <ServicesListPage />
        </Route>
        {/* <Route path="/servises/:id">
          <ServicePage />
        </Route> */}

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
