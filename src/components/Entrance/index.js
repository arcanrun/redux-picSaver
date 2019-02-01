import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import "./style.css";
import Spinner from "../Spinner";

const Entrance = ({
  avatar,
  name,
  last_name,
  onClick,
  isSending,
  error,
  isLogedIn
}) => {
  if (isLogedIn) {
    return <Redirect to="/redux-picSaver" />;
  }
  return (
    <div className="entrance">
      <img className="entrance__avatar" src={avatar} alt="avatar" />
      <h1 className="entrance__title">
        {name} {last_name}
      </h1>
      <button className="entrance__btn" onClick={onClick}>
        LogIn
      </button>
      {isSending ? <Spinner /> : ""}
      {error ? <h1>Some error while adding your profile</h1> : ""}
    </div>
  );
};

Entrance.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  isLogedIn: PropTypes.bool.isRequired
};

export default Entrance;
