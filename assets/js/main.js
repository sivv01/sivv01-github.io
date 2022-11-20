// window.addEventListener('scroll', function(){
//     const nav = document.querySelector('nav');
//     nav.classList.toggle("sticky", window.scrollY > 0);
// });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the nav
var nav = document.querySelector('nav');

// Get the offset position of the nav
var sticky = nav.offsetTop;

// Add the sticky class to the nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}