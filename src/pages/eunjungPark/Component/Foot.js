import React, { Component } from 'react';
import './style/Foot.scss';

class Foot extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          westagram 정보 ・ 지원 ・ 홍보 센터 ・ API ・ 채용 정보 ・
          개인정보처리방침 ・ 약관 ・ 디렉토리 ・ 프로필 ・ 해시태그 ・ 언어
        </footer>
        <span className="color-light">@ 2021 WESTAGRAM</span>
      </>
    );
  }
}

export default Foot;
