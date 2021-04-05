import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/user/Login";
import Home from "./components/Home";
import SignUp from './components/user/SignUp';
import FoodCatContainer from './components/foods/FoodCatContainer';
import FoodDetails from './components/foods/FoodDetails';
import FoodsComponent from './components/foods/FoodsComponent';
import FC_try from './components/foods/FC_try';
import CON_try from './components/foods/CON_try';
import Dashboard from './components/user/Dashboard';
import WelcomeUser from './components/user/welcomeUser';
import Profile from './components/user/profile';
import NewDietPlan from './components/user/newDietPlan';
import CheckLogin from './components/user/checkLogin';
import MenuTable from './components/user/menuTable';
import TestCal from './components/user/testCal';


function App() {

  return (
    <div className="bg">
      <Router >
        <NavBar />
        <Route path="/foods/:foodName" component={FoodsComponent} />
        <Route path="/details/:fdcid" component={FoodDetails} />
        <Route path="/foodCats" component={FoodCatContainer} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dash" component={Dashboard} />
        <Route path="/welcome/:firstName/:lastName" component={WelcomeUser} />
        <Route path="/profile/:userId" component={Profile} />
        <Route path="/newPlan" component={NewDietPlan} />
        <Route path="/checkLogin" component={CheckLogin} />
        <Route path="/menu" component={MenuTable} />
        <Route path="/test" component={TestCal} />

      </Router>
    </div>
  );
}

export default App;
