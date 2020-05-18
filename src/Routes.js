import React from 'react';
import './Routes.css';
import { HashRouter, Route } from 'react-router-dom';

import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function Routes() {
  return (
    <HashRouter>
      <Route exact path='/' component={About} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} />
    </HashRouter>
  );
}

export default Routes;
