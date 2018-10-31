import React from "react";
import "./styles.module.scss";
import { Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import MainSlide from "components/MainSlide";
import Digital from "components/Digital"
import NavAlert from "components/NavAlert";

const App = props => [
  <Navigation key={2} />,
  <NavAlert key={3} />,
  <MainFrame key={4} />,
  <Footer key={5} />
];

const MainFrame = props => (
  <Switch>
    <Route exact path="/" component={MainSlide} />
    <Route exact path="/digital" component={Digital} />
    <Route exact path="/clothes" render={() => "의류/패션"} />
    <Route exact path="/hobby" render={() => "생활/취미"} />
    <Route exact path="/etc" render={() => "기타/잡화"} />
    <Route exact path="/upload" render={() => "물품등록하기"} />
  </Switch>
);

export default App;
