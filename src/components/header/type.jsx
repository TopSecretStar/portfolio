import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'Senior Software Developer',
          'Full Stack Developer',
          'Frontend Developer',
          'Mobile Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
