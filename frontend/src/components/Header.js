import React from 'react';
import './Header.css'; // Ensure this path matches where your Header.css file is located.
//import SearchBar from './SearchBar'; // Adjust the path if necessary

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="path/to/your/logo.svg" alt="Logo" /> {/* Update the path to your logo. */}
      </div>
      <div className="signin-button">
        <button>Sign In</button>
      </div>
    </div>
  );

};

export default Header;