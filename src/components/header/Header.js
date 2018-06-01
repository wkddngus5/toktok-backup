import React, { Component } from 'react';
import './Header.css';
import Hamburger from '../../img/hamburger.png';

class Header extends Component {
  render() {
    const menuStyle = {
      backgroundImage: `url(${Hamburger})`
    };

    return (
      <header className="header">
        <a>국회톡톡</a>
        <button id="demo-menu-lower-right"
                className="mdl-button mdl-js-button mdl-button--icon">
          <i className="material-icons">more_vert</i>
        </button>

        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
            for="demo-menu-lower-right">
          <li className="mdl-menu__item">Some Action</li>
          <li className="mdl-menu__item">Another Action</li>
          <li disabled className="mdl-menu__item">Disabled Action</li>
          <li className="mdl-menu__item">Yet Another Action</li>
        </ul>
        {/*<div className="right-elements">*/}
          {/*<div className="search-zone">SEARCH</div>*/}
          {/*<div className="menu" style={menuStyle}></div>*/}
        {/*</div>*/}
      </header>
    )
  }
}

export default Header;