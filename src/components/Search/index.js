import React from "react";
import "./style.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  componentDidMount() {
    const valueInput = (this.input.current.value = this.props.searchFor);
    this.props.onChange(valueInput);
  }
  handleChaneInput = e => {
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div className="search">
        <input
          ref={this.input}
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
