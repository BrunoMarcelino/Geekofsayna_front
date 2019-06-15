import React from 'react';
import './App.css';
import './components/materialize.css';
import './components/style.css';
import './components/custom.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login'
import Register from './components/register'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <p>
         Geek-of-sayna
        </p>
        </Router>
    </div>
  );
}

export default App;
