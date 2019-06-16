import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accueil from './components/home'
import Login from './components/login'
import Register from './components/register'
import Admin from './components/admin'

function App() {
  return (
    <div className="">
      <Router>
        <Route exact path="/" component={Accueil} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Admin} />
        </Router>
    </div>
  );
}

export default App;
