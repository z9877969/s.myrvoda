import { Component } from 'react';
import { createPortal } from 'react-dom';
import arrowUp from 'images/arrowUp-d.svg';
import s from './ScrollUp.module.css';

// const scrollRootRef = document.querySelector('#modal-root');

const ScrollUp = () => {
  return (
    <div>
      <a href="/" id="scroll" className={s.scroll}>
        <img src={arrowUp} alt="logo" />
      </a>
    </div>
  );
};

export default ScrollUp;

// const scrollUp = document.querySelector('#scroll-up');

// window.addEventListener('scroll', trackScroll);
// scrollUp.addEventListener('click', backToTop);

// function trackScroll() {
//   const scrolled = window.pageYOffset;
//   const coords = document.documentElement.clientHeight;

//   if (scrolled > coords) {
//     scrollUp.classList.add('scroll-up-show');
//   }
//   if (scrolled < coords) {
//     scrollUp.classList.remove('scroll-up-show');
//   }
// }

// export function backToTop() {
//   if (window.pageYOffset > 0) {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   }
// }
