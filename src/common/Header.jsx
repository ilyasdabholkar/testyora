import React from 'react'
import HeaderTopArea from './HeaderTopArea';
import Navbar from './Navbar';

function Header() {
  return (
    <div className="header">
        <HeaderTopArea/>
        <Navbar/>
    </div>
  )
}

export default Header