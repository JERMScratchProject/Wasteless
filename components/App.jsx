import React from 'react';
import SideNavBar from './SideNavBar'
import CurrentList from './CurrentList';
import OutcomesList from './OutcomesList';
import PurchasedList from './PurchasedList';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
  <div className='App'>
    <SideNavBar />
    <Router>
    <Switch>
      <Route component = {CurrentList} exact path="/"></Route>
      <Route component = {PurchasedList} path="/purchased"></Route>
      <Route component = {OutcomesList} path="/outcomes"></Route>
    </Switch>
    </Router>
  </div>

  )
}

export default App;
