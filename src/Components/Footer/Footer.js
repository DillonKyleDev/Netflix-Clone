import React, { useState } from 'react';
import './footer.css';
import { BsGlobe } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';

function Footer() {
  const [ toggle, setToggle ] = useState(false);

  return <div className='reposition'>
    <h1 className='header'>Questions? Call 1-844-505-2993</h1>
      <div className='flex-links'>
        <ul className='link-list'>
          <li className='link'>
            FAQ
          </li>
          <li className='link'>
            Help Center
          </li>
          <li className='link'>
            Account
          </li>
          <li className='link'>
            Media Center
          </li>
          <li className='link'>
            Investor Relations
          </li>
          <li className='link'>
            Jobs
          </li>
          <li className='link'>
            Redeem Gift Cards
          </li>
          <li className='link'>
            Buy Gift Cards
          </li>
          <li className='link'>
            Ways to Watch
          </li>
          <li className='link'>
            Terms of Use
          </li>
          <li className='link'>
            Privacy 
          </li>
          <li className='link'>
            Cookie Preferences
          </li>
          <li className='link'>
            Corporate Information
          </li>
          <li className='link'>
            Contact Us
          </li>
          <li className='link'>
            Speed Test
          </li>
          <li className='link'>
            Legal Notices
          </li>
          <li className='link'>
            Only on Netflix
          </li>
          <li className='link'>

          </li>
        </ul>
      </div>
      <button onClick={() => setToggle(prevToggle => !prevToggle)} className="language-select-footer">
        <BsGlobe id="language-select-globe-footer"/><span className='language-select-text-footer'>English</span><MdArrowDropDown id="down-arrow"/>
      </button>
      { toggle && 
      <div className='lang-toggle'>
        <div className='lang'>English</div>
        <div className='lang'>Español</div>
      </div> }
  </div>;
}

export default Footer;
