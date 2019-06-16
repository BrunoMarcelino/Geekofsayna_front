import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accueil from './components/home'
import Login from './components/login'
import Register from './components/register'
import { Provider } from 'react-redux'
import Store from './store/configureStore'
import DashBoard from './components/dashBoard'
import Article from './components/article'

function App() {
  return (
    <div className="">
      <Provider store={Store}>
        <Router>
          <Route exact path="/" component={Accueil} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/article/:id" component={Article } />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
