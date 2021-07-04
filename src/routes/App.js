import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Peticiones from '../containers/Peticiones';
import NotFound from '../containers/NotFound';
import Peticiones from '../containers/Peticiones';
import Layout from '../components/Layout';
import Porfile from '../components/Porfile';


const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/peticiones' component={Peticiones} />
<<<<<<< Updated upstream
=======
        <Route exact path='/porfile' component={Porfile} />
>>>>>>> Stashed changes
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
