import React, { Component } from 'react';
import AsideFeed from '../AsideFeed/AsideFeed';

class StoryFeeds extends Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    fetch(`/data/${this.props.data}`, {
      method: 'GET',
    })
      .then(result => result.json())
      .then(users => {
        this.setState({
          users,
        });
      });
  };

  render() {
    return (
      <ul className="aside-board__contents">
        {this.state.users.map(user => (
          <AsideFeed key={user.id} user={user} />
        ))}
      </ul>
    );
  }
}

export default StoryFeeds;
