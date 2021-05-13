import React from 'react';

import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Searchpage from './components/Searchpage';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route exact path="/"> <Home/> </Route>
      <Route exact path="/searchpage"> <Searchpage/> </Route>
     </Switch>
     <Footer />
     </Router>
    </div>
  );
}

export default App;
