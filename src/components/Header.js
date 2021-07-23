import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header class="header">
        <img src={logo} alt="Карачаевск" class="header__logo" />
    </header>
  );
}

export default Header;