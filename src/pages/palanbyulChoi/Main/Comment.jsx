import React, { Component } from 'react';
class Comment extends Component {
  render() {
    return <span> {this.props.value}</span>;
  }
}

export default Comment;
