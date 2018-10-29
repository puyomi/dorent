import React, { Component } from "react";
import "./styles.module.scss";
import { Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import MainSlide from "components/MainSlide";

const App = props => [<Navigation />, <MainRoutes />, <Footer />];


const MainRoutes = props => (
  <Switch>
    <Route exact path="/" component={MainSlide} />
    <Route exact path="/digital" render={()=>"디지털/가전"} />
    <Route exact path="/clothes" render={()=>"의류/패션"} />
    <Route exact path="/hobby" render={()=>"생활/취미"} />
    <Route exact path="/etc" render={()=>"기타/잡화"} />
  </Switch>
);



export default App;
