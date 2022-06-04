import React from 'react';
import sideImage from '../../assets/cover/side-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Ken Eversley</h1>
      <img src={sideImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
