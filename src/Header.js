import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='Header_logo'>
      <img
        src='http://ww12.pnging.com/uploads/amazon/amazon_PNG11.png'
        alt='amazon'
      />

      <div className='header_search'>
        <input className='header_searchinput' type='text' />
        {/* logo */}
      </div>

      <div className='header_nav'>
        <div className='header option'>
          <span className='header_optionLineOne'> Hello Guest</span>
          <span className='header_optionLineTwo'> Sign in </span>
          <span className='header_optionLineThree'> Returns </span>
          <span className='header_optionLineFour'> </span>
        </div>
        <div className='header option'></div>
        <div className='header option'></div>
        <div className='header option'></div>
      </div>
    </div>
  )
}

export default Header