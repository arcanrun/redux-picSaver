import React from "react";
import * as VKConnect from "@vkontakte/vkui-connect";
import { connect } from "react-redux";

import { addLikeAPI, SIGN_UP_VK } from "../API/API_LIKE";
import Entrance from "../components/Entrance";

class EntranceContainer extends React.Component {
  state = {
    isSending: false,
    logedIn: false,
    error: false
  };
  logIn = async () => {
    const { vk_id, name, last_name } = this.props.user;
    this.setState({ isSending: true });
    const data = { vk_id, name, last_name };
    let res = await fetch(addLikeAPI(SIGN_UP_VK), {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    // res.RESONES
    //   ? this.setState({ logedIn: true, isSending: false })
    //   : this.setState({ error: true });
  };
  render() {
    const { name, last_name, avatar } = this.props.user;
    const { isSending, error } = this.state;
    return (
      <Entrance
        name={name}
        last_name={last_name}
        avatar={avatar}
        isSending={isSending}
        error={error}
        onClick={this.logIn}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(EntranceContainer);
