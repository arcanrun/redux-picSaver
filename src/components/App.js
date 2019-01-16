import React, { Component } from "react";

import Header from "./Header";
import { SearchContainer } from "../containers/SearchContainer";
import { PhotosContainer } from "../containers/PhotosContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchContainer />
        <PhotosContainer />
      </div>
    );
  }
}

export default App;
