import React, { Component } from "react";
import { Route } from "react-router-dom";

import { HeaderContainer } from "../containers/HeaderContainer";
import { SideMenuContainer } from "../containers/SideMenuContainer";
import Main from "./Main";
import Favorites from "../components/Favorites";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenuContainer />
        <HeaderContainer />
        <Route exact path="/" component={Main} />
        <Route path="/favorites" component={Favorites} />
      </div>
    );
  }
}

export default App;
