import React, { Component } from 'react';

class Love extends Component {
  changeFeedLove = () => {
    this.props.changeFeedLove(this.props.feedId);
  };

  render() {
    return (
      <>
        <i
          className={this.props.isLiked ? 'fa fa-heart' : 'far fa-heart'}
          onClick={this.changeFeedLove}
        />
      </>
    );
  }
}

export default Love;
