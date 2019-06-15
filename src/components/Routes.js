import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/actualites' component={ProfilePage} />
        <Route path='/medicament' component={ProfilePage} />
        <Route path='/protection' component={ProfilePage} />
      </Switch>
    );
  }
}

export default Routes;
