import React from 'react';

const Background = () => {
  return (
    <svg style={{ position: 'absolute', bottom: 0, zIndex: -1 }} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 725'>
      <defs><clipPath id='a'><path d='M0 0h1920v725H0z'/></clipPath></defs>
      <g data-name='Web 1920 – 1' clipPath='url(#a)'>
        <path fill='#fff' d='M0 0h1920v725H0z'/>
        <path data-name='Subtraction 7' d='M1920.001 727h-244.233L.001 309.184V0l1920 478.71V727z' fill='#ffbc05'/>
        <path data-name='Subtraction 6' d='M1824.242 726.835H.001V272l1824.24 454.834z'/>
      </g>
    </svg>
  );
};

export default Background;
