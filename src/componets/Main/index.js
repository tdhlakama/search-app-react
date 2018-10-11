import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Products from '../../containers/Products';
import Product from '../../containers/Product';

const Main = (props) => (

  <Switch>
    <Route exact path="/" component={Products}></Route>
    <Route exact path="/products" component={Products}></Route>
    <Route exact path="/products/:id" component={Product}></Route>
  </Switch>

);


export default Main;