import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from './Aside/Aside';
import Feed from './Feed/Feed';
import './Main.scss';

class MainCheoljin extends Component {
  state = {
    feeds: [],
  };

  componentDidMount = () => {
    fetch('/data/CommentDataCJ.json', {
      method: 'GET',
    })
      .then(result => result.json())
      .then(feeds => {
        this.setState({
          feeds,
        });
      });
  };

  render() {
    return (
      <div className="main-cheoljin">
        <Nav />
        <main className="main">
          <div className="main__container">
            <section className="main__feeds">
              {this.state.feeds.map(feed => (
                <Feed key={feed.id} feed={feed} comments={feed.comments} />
              ))}
            </section>
            <Aside />
          </div>
        </main>
      </div>
    );
  }
}

export default MainCheoljin;
