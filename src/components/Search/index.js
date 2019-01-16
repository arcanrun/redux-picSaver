import React from "react";
import "./style.css";
class Search extends React.Component {
  handleChaneInput = e => {
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="search..."
          onChange={this.handleChaneInput}
        />
      </div>
    );
  }
}
export default Search;
