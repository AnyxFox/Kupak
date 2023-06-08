const header = document.getElementById("head")
const mt = document.getElementById("mt")
const mt2 = document.getElementById("mt2")
const st = document.getElementById("st")
const st2 = document.getElementById("st2")
const sti = document.getElementById("sti")
const stis = document.getElementById("stis")
const thebtn = document.getElementById("clickable")
const ftr = document.getElementById("ftr")
const nav = document.getElementById("nav")
const c = document.getElementById("c")
const c2 = document.getElementById("c2")
const d = document.getElementById("d")
const d2 = document.getElementById("d2")
const d3 = document.getElementById("d3")
const d4 = document.getElementById("d4")

window.onload = function() {
    header.classList.add('slideout');
    mt.classList.add('mtupslide');
    mt2.classList.add('mt2upslide')
    st.classList.add('stupslide')
    st2.classList.add('st2upslide')
    sti.classList.add('stiupslide')
    stis.classList.add('stisupslide')
    thebtn.classList.add("pupslide")
    ftr.classList.add("ftrupslide")
    nav.classList.add("navdownslide")
    c.classList.add("cupslide")
    c2.classList.add("c2upslide")
    d.classList.add("dupslide")
    d2.classList.add("d2upslide")
    d3.classList.add("d3upslide")
    d4.classList.add("d4upslide")
    setTimeout(function() {
        header.classList.remove('slideout');
        mt.classList.remove('mtupslide');
        ftr.classList.remove("ftrupslide")
        nav.classList.remove("navdownslide") 
    }, 1500);
    setTimeout(function() {
      st.classList.remove('stupslide')
    }, 2500);
    setTimeout(function() {
      sti.classList.remove('stiupslide')
    }, 3000);
    setTimeout(function() {
      mt2.classList.remove('mt2upslide')
    }, 3500);
    setTimeout(function() {
      stis.classList.remove('stisupslide')
    }, 4000);
    setTimeout(function() {
      st2.classList.remove('st2upslide')
    }, 4500);
    setTimeout(function() {
      thebtn.classList.remove("pupslide")
      c.classList.remove("cupslide")
      c2.classList.remove("c2upslide")
      d.classList.remove("dupslide")
    }, 5000);
    setTimeout(function() {
      d2.classList.remove("d2upslide")
    }, 5250);
    setTimeout(function() {
      d3.classList.remove("d3upslide")
    }, 5500);
    setTimeout(function() {
      d4.classList.remove("d4upslide")
    }, 5750);
};
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}