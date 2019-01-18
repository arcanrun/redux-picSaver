import React from "react";
import PropTypes from "prop-types";

import "./style.css";
import "../../static/icons.css";
import Spinner2 from "../Spinner2";

export default class PhotosItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: this.props.isLiked, isSendingLike: false };
  }
  toggleAndHandleLike = () => {
    const { id, urls } = this.props;
    this.props.send(id, urls, this.switchSendingLike);
    this.setState({ isLiked: !this.state.isLiked });
  };

  switchSendingLike = () => {
    this.setState({ isSendingLike: !this.state.isSendingLike });
  };
  render() {
    const { urls, id, description } = this.props;
    const { isLiked, isSendingLike } = this.state;
    return (
      <div className="photos__item">
        <div className="photos__item_warapper">
          <img
            id={id}
            className="photos__item_img"
            src={urls.small}
            alt={description}
          />
        </div>
        <div className="photos__item_footer">
          <span>
            {description !== null && description.length >= 20
              ? description.slice(0, 20) + "..."
              : description}
          </span>
          <span>
            {isSendingLike ? (
              <Spinner2 />
            ) : isLiked ? (
              <i
                className="heart_red"
                style={{ cursor: "pointer" }}
                onClick={this.toggleAndHandleLike}
              />
            ) : (
              <i
                className="heart_black"
                style={{ cursor: "pointer" }}
                onClick={this.toggleAndHandleLike}
              />
            )}
          </span>
        </div>
      </div>
    );
  }
}
PhotosItem.propTypes = {
  urls: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  isLiked: PropTypes.bool.isRequired,
  send: PropTypes.func.isRequired
};

// export default PhotosItems;
