import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import App from "../components/App";
import * as vkActions from "../actions/vk";
import { fetchUser } from "../actions/userActions";
import { addLikeAPI, IS_SIGNED_UP } from "../API/API_LIKE";
import Spinner from "../components/Spinner";

class Root extends React.Component {
  state = {
    isSignedUp: false,
    isFetching: true
  };
  async componentDidMount() {
    await this.props.fetchUser();
    await this.props.initApp();
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.fetcher();
    }
  }
  async fetcher() {
    const { vk_id } = this.props.user;
    const data = { vk_id };
    let res = await fetch(addLikeAPI(IS_SIGNED_UP), {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => res.json());
    if (res.RESPONSE) {
      this.setState({
        isSignedUp: true,
        isFetching: false
      });
    } else {
      this.setState({
        isSignedUp: false,
        isFetching: false
      });
    }
  }
  render() {
    return this.state.isFetching ? (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <Spinner />
      </div>
    ) : (
      <App isSignedUp={this.state.isSignedUp} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(
  connect(
    mapStateToProps,
    { initApp: vkActions.initApp, fetchUser }
  )(Root)
);
