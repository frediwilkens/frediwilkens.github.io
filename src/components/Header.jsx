import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header-content'>
      <div>
        <Link className='header-link' to='/'>Home</Link>
      </div>
      <div>
      <Link className='header-link' to='/about'>About</Link>
      </div>
      <div>
      <Link className='header-link' to='/projects'>Projects</Link>
      </div>
    </header>
  );
}

export default Header;