import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Products from '../../containers/Products';
import Product from '../../containers/Product';
import ProductScroll from '../../containers/ProductScroll';
import MostViewedProducts from '../../containers/MostViewedProducts';
import NearMeProducts from '../../containers/NearMeProducts';

const Main = (props) => (

  <Switch>
    <Route exact path="/" component={Products}></Route>
    <Route exact path="/products" component={Products}></Route>
    <Route exact path="/products/:id" component={Product}></Route>
    <Route exact path="/productScroll" component={ProductScroll}></Route>
    <Route exact path="/mostViewed" component={MostViewedProducts}></Route>
    <Route exact path="/nearMe" component={NearMeProducts}></Route>

  </Switch>

);


export default Main;