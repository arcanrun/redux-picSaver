import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { HeaderContainer } from "../containers/HeaderContainer";
import { SideMenuContainer } from "../containers/SideMenuContainer";
import Main from "./Main";
import FavoritesContainer from "../containers/FavoritesContainer";
import NoMatch from "../components/NoMatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenuContainer />
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/favorites" component={FavoritesContainer} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
