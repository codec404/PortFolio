console.log("@Audio Conclave");

// let getVideo = document.querySelectorAll(".videoItems");
// // console.log(getVideo.length)
// for(let i = 0;i<getVideo.length-1;i++)
// {
//   const transform = getVideo[i].style.transform;
//   const re = /translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/
//   const results = re.exec(transform);
//   console.log(results.groups.z, results.groups.y, results.groups.x);
//   const zidx = getVideo[i].style.zIndex;
//   console.log(zidx);
// }

let loader = document.getElementById("preloader");

window.addEventListener("load",()=>{
  loader.style.display = "none";
});

window.onload = function(){
  
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
 
  prevBtn.addEventListener("click",function(){
    prevSlide();
 });
  nextBtn.addEventListener("click",function(){
    nextSlide();
 });
  
}
let slideNumber = 0;
const prevSlide = () =>{
  const slides = document.getElementsByClassName('slides');
const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName('current');
  currentSlide[0].classList.remove("current");
  if(slideNumber == 0){
    slideNumber = slides.length-1;
  }
  else{
      slideNumber = slideNumber-1;
  }
  slides[slideNumber].classList.add("current");
}
const nextSlide = () =>{
  const slides = document.getElementsByClassName('slides');
const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName('current');
  currentSlide[0].classList.remove("current");
  if(slideNumber == (slides.length-1)){
    slideNumber = 0;
  }
  else{
      slideNumber = slideNumber+1;
  }
  slides[slideNumber].classList.add("current");
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
}