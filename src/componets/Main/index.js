import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Facilities from '../../containers/Facilities';
import FacilityInfor from '../../containers/FacilityInfor';

const Main = (props) => (

  <Switch>
    <Route exact path="/" component={Facilities}></Route>
    <Route exact path="/facilities/:id" component={FacilityInfor}></Route>
  </Switch>

);


export default Main;