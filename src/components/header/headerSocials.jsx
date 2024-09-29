import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const headerSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://github.com/TopSecretStar'
        target='_blank'
        rel='noreferrer'
      >
        <BsGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/gerson-stuva/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default headerSocials;
