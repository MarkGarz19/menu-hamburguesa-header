'use strict'
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

/* function toggleNav(){
    navLinks.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav); */

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
});