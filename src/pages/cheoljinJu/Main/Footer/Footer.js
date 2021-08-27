import React, { Component } from 'react';
import FOOTER_LINK from './FOOTER_LINK';
import './Footer.scss';
import { date } from 'language-tags';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-cheoljin">
        <ul>
          {FOOTER_LINK.map(item => (
            <li key={item.id}>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
        <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
      </footer>
    );
  }
}

export default Footer;
