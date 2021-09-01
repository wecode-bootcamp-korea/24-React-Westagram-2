import React, { Component } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import Feeds from '../Component/Feeds';
import FeedsProfile from '../Component/FeedsProfile';
import Story from '../Component/Story';
import Suggest from '../Component/Suggest';
import Foot from '../Component/Foot';

const commentList = [
  {
    id: 1,
    userId: 'hoon-zz',
    commentText: '은정아 라이언좀 그만 사',
  },
  {
    id: 2,
    userId: 'ryan.seoul.icon',
    commentText: '춘식이는 프렌즈를 좋아해',
  },
  {
    id: 3,
    userId: 'boragom_molly',
    commentText: '무더운 여름밤 춘식이와 나선 밤 산책',
  },
];

const feedsList = [
  {
    id: 4,
    feedsProfileUrl: './images/eunjungPark/feeds-profile.png',
    userId: 'eunJeong ',
    feedsImageUrl: './images/eunjungPark/feeds-image.png',
    mineProfileUrl: './images/eunjungPark/feeds-profile.png',
    likeUserId: 'chunSig ',
    likeUserNum: '10명',
    commentTitText: '수호가 라이언을 좋아하는구나..!',
    commentList,
  },
  {
    id: 5,
    feedsProfileUrl: './images/eunjungPark/feeds-profile.png',
    userId: 'eunJeong22 ',
    feedsImageUrl: './images/eunjungPark/feeds-image.png',
    mineProfileUrl: './images/eunjungPark/feeds-profile.png',
    likeUserId: 'chunSig22 ',
    likeUserNum: '20명',
    commentTitText: '수호가 라이언을 좋아하는구나..!',
    commentList,
  },
  {
    id: 6,
    feedsProfileUrl: './images/eunjungPark/feeds-profile.png',
    userId: 'eunJeong33 ',
    feedsImageUrl: './images/eunjungPark/feeds-image.png',
    mineProfileUrl: './images/eunjungPark/feeds-profile.png',
    likeUserId: 'chunSig33 ',
    likeUserNum: '30명',
    commentTitText: '수호가 라이언을 좋아하는구나..!',
    commentList,
  },
];

class MainEunjung extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="mainContainer">
          <div className="main">
            {feedsList.map(feed => {
              return (
                <Feeds
                  key={feed.id}
                  feedsProfileText={feed.feedsProfileText}
                  feedsProfileUrl={feed.feedsProfileUrl}
                  userId={feed.userId}
                  feedsImageText={feed.feedsImageText}
                  feedsImageUrl={feed.feedsImageUrl}
                  mineProfileText={feed.mineProfileText}
                  mineProfileUrl={feed.mineProfileUrl}
                  likeUserId={feed.likeUserId}
                  likeUserNum={feed.likeUserNum}
                  commentTitText={feed.commentTitText}
                  commentList={feed.commentList}
                />
              );
            })}
            <aside className="main-right">
              <FeedsProfile />
              <Story />
              <Suggest />
              <Foot />
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default MainEunjung;
