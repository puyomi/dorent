import React from "react";
// import { Footer } from "..";
import { BodyContainer, HeaderContainer } from "containers";
import "./styles.module.scss"

const App = () => {
  return [
    <HeaderContainer key={2} />,
    <BodyContainer key={4} />,
    // <Footer key={5} />
  ]
}


export default App;
