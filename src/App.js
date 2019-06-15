import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accueil from './components/home'
import Login from './components/login'
import Register from './components/register'

function App() {
  return (
    <div className="">
      <Router>
        <Route exact path="/" component={Accueil} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
