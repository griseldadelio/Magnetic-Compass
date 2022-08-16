import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './screen/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
