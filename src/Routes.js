import React from 'react';
import './Routes.css';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function Routes() {
  return (
    <HashRouter>
      <Route exact path='/' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} />
    </HashRouter>
  );
}

export default Routes;
