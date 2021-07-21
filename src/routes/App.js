import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Request from '../containers/Request';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Porfile from '../components/Porfile';
import Order from '../containers/Order';


const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/request' component={Request} />
        <Route exact path='/porfile' component={Porfile} />
        <Route exact path='/order' component={Order}/>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
