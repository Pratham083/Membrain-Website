import { useState } from 'react';
import burger from '../assets/burger-dropdown.svg';
import logo from '../assets/logo.svg';
import './NavBar.css';

const NavBar = () => {
  const [isLightTheme, setTheme] = useState(true);

  return (
    <nav className="navbar">
      <button
        className="image-btn first-item"
        onClick={() => {
          console.log('click hamburger');
        }}
      >
        <img src={burger} alt="menu"></img>
      </button>
      <div className="no-pad">
        <p>Membrain</p>
        <p>Collective</p>
      </div>
      <p className="last-label">{isLightTheme ? 'Light Mode' : 'Dark Mode'}</p>
      <svg height="60" width="60" className="last-item">
        <circle
          cx="30"
          cy="30"
          r="15"
          stroke={isLightTheme ? 'black' : 'white'}
          strokeWidth="5"
          fill={isLightTheme ? 'white' : 'black'}
          onClick={() => {
            setTheme(!isLightTheme);
          }}
        ></circle>
      </svg>
    </nav>
  );
};
export default NavBar;
