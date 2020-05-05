import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import SingleDog from './pages/SingleDog';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dogs" component={Dogs} />
        <Route exact path="/dogs/:slug" component={SingleDog} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
