import React from 'react';
import './header.css';
import CTA from './CoreToAction';
// import Me from '../../assets/me.jpg';
import HeaderSocial from './headerSocials';
import Type from './type';

const header = () => {
  return (
    <header>
      <div className='container header__container' id='header'>
        <h1 className='name'>Gerson Stuva</h1>
        <div>
          <h2 className='text-light'>
            <Type />
          </h2>
        </div>
        <CTA />
        <HeaderSocial />
        {/* <div className='.me'>
          <img src={Me} className='me' alt='me' />
        </div> */}

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
