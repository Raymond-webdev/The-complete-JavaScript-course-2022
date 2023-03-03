'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal))



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
 });


 
// Button scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth);

//      Scrolling
//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: "smooth",
// });
  // section1.scrollIntoView({ behavior: 'smooth' });
// });

///////////////////////////////////
// Page navigation 

// document.querySelectorAll(".nav__link").forEach(function(el){
//   el.addEventListener("click", function(e){
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth" })
//   });
// });


// 1. Add event listener to common parent element
// 2. determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function(e){
  e.preventDefault();

  //Matching strategy
  if(e.target.classList.contains("nav__link")){
    
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth" })
  }
});


// //  const h1 = document.querySelector("h1");

// //  const alertH1 = function(e) {
// //   alert("addEventListener: Great! You are reading the heading");
  
// //  };
 
// //  h1.addEventListener("mouseenter", alertH1);

// //  setTimeOut(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// // h1.onmouseenter = function(e){
// //   alert("addEventListener: Great! You are reading the heading :D");
// // }

// // rgb(255.255.255);

// const randomInt = (min, max) => 
// Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function(e){
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav__links").addEventListener("click", function(e){
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav").addEventListener("click", function(e){
//   this.style.backgroundColor = randomColor();
// });