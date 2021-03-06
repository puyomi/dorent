import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  AuthContainer,
  ProfileContainer,
  UploadContainer,
  ItemListContainer
} from "containers";

class BodyContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => "메인화면"} />
        <Route exact path="/products" component={ItemListContainer} />
        <Route exact path="/upload" component={UploadContainer} />
        <Route exact path="/auth" component={AuthContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

const NotFound = () => <div>404! Page NOT FOUND</div>;

export default BodyContainer;
