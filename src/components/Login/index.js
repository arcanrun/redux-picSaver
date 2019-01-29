import React from "react";
import * as VKConnect from "@vkontakte/vkui-connect";
import { fetchUser } from "../../actions/userActions";

export default class Login extends React.Component {
  state = {
    name: undefined,
    photo: undefined
  };
  loginByVK = () => {
    fetchUser()();
  };
  render() {
    const { name, photo } = this.state;
    return (
      <div className="login">
        <button onClick={this.loginByVK}>login by VK</button>
        {name ? (
          <div>
            <h1>{this.state.name}</h1>
            <img src={photo} />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
