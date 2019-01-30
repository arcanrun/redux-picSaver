import React from "react";
import { connect } from "react-redux";

import Favorites from "../components/Favorites";
import { fetchFavPhotos } from "../actions/userActions";
import { toggleLike } from "../actions/likesActions";
import Spinner from "../components/Spinner";

class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favPhotos: this.props.photos ? this.props.photos : [],
      isFetching: this.props.photos ? false : true
    };
  }

  async componentDidMount() {
    let res = await this.props.fetchFavPhotos(this.props.vk_id);
    if (res) {
      this.setState({ favPhotos: res.RESPONSE, isFetching: false });
    }
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.photos !== this.props.photos) {
  //     this.setState({ isFetching: false });
  //   }
  // }

  render() {
    const { favPhotos, isFetching } = this.state;
    console.log("<favCOntainer>", isFetching);
    if (isFetching) {
      return <Spinner />;
    }
    return (
      <Favorites
        userName={"" + this.props.vk_id}
        favPhotos={favPhotos}
        favPhotosLength={this.props.photos.length}
        send={this.props.toggleLike}
      />
    );
  }
}
const mapStateToProps = state => ({
  vk_id: state.user.vk_id,
  photos: state.user.favorites_photos.photos,
  isFetching: state.user.favorites_photos.isFetching
});

export default connect(
  mapStateToProps,
  { fetchFavPhotos, toggleLike }
)(FavoritesContainer);
