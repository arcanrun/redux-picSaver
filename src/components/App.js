import React, { Component } from "react";

import { HeaderContainer } from "../containers/HeaderContainer";
import { SideMenuContainer } from "../containers/SideMenuContainer";
import { SearchContainer } from "../containers/SearchContainer";
import { PhotosContainer } from "../containers/PhotosContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenuContainer />
        <HeaderContainer />
        <SearchContainer />
        <PhotosContainer />
      </div>
    );
  }
}

export default App;
