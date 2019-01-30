import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { HeaderContainer } from "../containers/HeaderContainer";
import { SideMenuContainer } from "../containers/SideMenuContainer";
import Main from "./Main";
import FavoritesContainer from "../containers/FavoritesContainer";
import NoMatch from "../components/NoMatch";
import Login from "./Login";

import EntranceContainer from "../containers/EntranceContainer";

class App extends Component {
  logIn = () => {};
  render() {
    const { isSignedUp } = this.props;
    // const isSignedUp = true;
    // console.log(isSignedUp);
    return (
      <div className="App">
        {!isSignedUp ? (
          <EntranceContainer />
        ) : (
          <>
            <SideMenuContainer />
            <HeaderContainer />

            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/favorites" component={FavoritesContainer} />
              <Route path="/login-page" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </>
        )}
      </div>
    );
  }
}

export default App;
