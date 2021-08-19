import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="nav__logos">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <div className="divider"></div>
            <a href="#">
              <h1 className="nav__name">westagram</h1>
            </a>
          </div>
          <form className="search__form">
            <input type="text" className="nav__search" placeholder="검색" />
          </form>
          <div className="nav__menu">
            <a href="#">
              <img
                src="/images/cheoljinJu/explore.png"
                alt="explore"
                className="menu__item"
              />
            </a>
            <a href="#">
              <img
                src="/images/cheoljinJu/heart.png"
                alt="liked content"
                className="menu__item"
              />
            </a>
            <a href="#">
              <img
                src="/images/cheoljinJu/profile.png"
                alt="profile"
                className="menu__item profile"
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
