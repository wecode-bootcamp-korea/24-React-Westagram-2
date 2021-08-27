import React, { Component } from 'react';
import InputFeed from './MainComponents/InputFeed';
import Aside from './MainComponents/Aside';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

class MainDoyoung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: [],
      storyListData: [],
    };
  }

  componentDidMount() {
    fetch('/data/feedData-Doyoung.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedData: data,
        });
      });

    fetch('/data/storyListData-Doyoung.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          storyListData: data,
        });
      });
  }

  render() {
    const { feedData } = this.state;
    return (
      <div>
        <body className="main">
          <main>
            <Nav />
            <div className="feedsList">
              {feedData.map(data => {
                return (
                  <InputFeed
                    key={data.id}
                    uploaderPic={data.uploaderPic}
                    uploaderName={data.uploaderName}
                    feedPic={data.feedPic}
                    uploaderComment={data.uploaderComment}
                    friendsComments={data.friendsComments}
                  />
                );
              })}
            </div>
            <Aside />
          </main>
        </body>
      </div>
    );
  }
}

export default MainDoyoung;
