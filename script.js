const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.onclick = function () {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuToggle.innerHTML = "×";
  } else {
    menuToggle.innerHTML = "☰";
  }
};
const sideIcon=document.querySelector(".side-icon");
let timer;
window.addEventListener("scroll",function(){
  sideIcon.style.display="block";
  clearTimeout(timer);
  timer=setTimeout(function(){
    sideIcon.style.display="none";
  },1000);
})
window.addEventListener("mousemove",function(){
  sideIcon.style.display="block";
  clearTimeout(timer);
  timer=setTimeout(function(){
    sideIcon.style.display="none";
  },1000);
})
