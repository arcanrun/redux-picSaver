import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Entrance = ({ avatar, name, last_name, onClick, isSending, error }) => (
  <div className="entrance">
    <img className="entrance__avatar" src={avatar} alt="avatar" />
    <h1>
      {name} {last_name}
    </h1>
    <button className="entrance__btn" onClick={onClick}>
      LogIn
    </button>
    {isSending ? <h1>loading...</h1> : ""}
    {error ? <h1>Some error while adding your profiel</h1> : ""}
  </div>
);

export default Entrance;
