import React from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Menu from './components/pages/Menu';
import Order from './components/pages/Order';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/services' component = {Services} />
        <Route path = '/Menu' component = {Menu} />
        <Route path = '/order' component = {Order} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
