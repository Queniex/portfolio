// navBar Fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixed = header.offsetTop //offsetTop -> 0, yaitu ketika blm d scroll

    if(window.pageYOffset > fixed){
        header.classList.add('navbar-fixed')
    } else{
        header.classList.remove('navbar-fixed')
    }
}

//  Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

//  Slider Image
// let slideIndex = 1
// showSlides(slideIndex)

// function plusSlides(n){
//     showSlides(slideIndex += n)
// }

// function currentSlide(n){
//     showSlides(slideIndex = n)
// }

// function showSlides(n){
//     let i
//     let slides = document.getElementsByClassName('slides')
//     let dots = document.getElementsByClassName('dot')
//     if ( n > slides.length ){
//         slideIndex = 1 
//     }
//     if ( n < 1 ){
//         slideIndex = slides.length
//     } 
//     for ( i = 0; i < slides.length; i++ ){
//         slides[i].style.display = "none";
//     } 
//     for ( i = 0; i < dots.length; i++ ) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
