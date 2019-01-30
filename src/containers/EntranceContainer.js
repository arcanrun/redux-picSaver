import React from "react";
import { connect } from "react-redux";

import { addLikeAPI, SIGN_UP_VK } from "../API/API_LIKE";
import Entrance from "../components/Entrance";
import { fetchEmail } from "../actions/userActions";

class EntranceContainer extends React.Component {
  state = {
    isSending: false,
    logedIn: false,
    error: false
  };
  componentDidMount() {
    this.props.fetchEmail();
  }
  logIn = async () => {
    const { vk_id, name, last_name, email } = this.props.user;
    this.setState({ isSending: true });
    const data = { vk_id, name, last_name, email };
    console.log(data);
    let res = await fetch(addLikeAPI(SIGN_UP_VK), {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.log(new Error(err)));
    console.log("res===>", res.RESPONSE);
    res.RESPONSE
      ? this.setState({ logedIn: true, isSending: false, error: false })
      : this.setState({ logedIn: false, error: true, isSending: false });
  };
  render() {
    console.log("YOU ARE IN ENTRANCE CONTAINER");
    const { name, last_name, avatar } = this.props.user;
    const { isSending, error, logedIn } = this.state;
    return (
      <Entrance
        name={name}
        last_name={last_name}
        avatar={avatar}
        isSending={isSending}
        error={error}
        onClick={this.logIn}
        isLogedIn={logedIn}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { fetchEmail }
)(EntranceContainer);
