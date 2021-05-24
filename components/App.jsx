import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SideNavBar from './SideNavBar';
import CurrentList from './CurrentList';
import OutcomesList from './OutcomesList';
import PurchasedList from './PurchasedList';

function App() {
  return (
    <div className="App">
      <SideNavBar />

      <Switch>
        <Route component={CurrentList} exact path="/" />
        <Route component={PurchasedList} exact path="/purchased" />
        <Route component={OutcomesList} exact path="/outcomes" />
      </Switch>
    </div>
  );
}

export default App;
