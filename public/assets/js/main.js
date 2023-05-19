console.log("Welcome!!!");

let setProgress = document.querySelectorAll(".progress-bar");
let counter = document.querySelectorAll(".count");
let len = setProgress.length;
let interval = 900;
let flag = true; // Only  once set
let inc = true; // Only  once set

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
}

//Function to give the increase number animation
const increasePercent = () => {
  if (
    document.body.scrollTop >= 600 ||
    (document.documentElement.scrollTop >= 600 && inc)
  ) {
    counter.forEach((val) => {
      let startVal = 0;
      let endVal = parseInt(val.getAttribute("data-val"));
      let dur = Math.floor(interval / endVal);
      let cnt = setInterval(function () {
        startVal += 1;
        val.innerHTML = startVal;
        if (startVal == endVal) {
          clearInterval(cnt);
        }
      }, dur);
    });
    inc = false;
  }
};

//Function to collapse and hide the nav Bar on scrolling
function scrollFunction() {
  // console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("collapse").style.top = "0";
    document.getElementById("collapse").style.position = "sticky";
  } else {
    document.getElementById("collapse").style.top = "-56px";
    document.getElementById("collapse").style.position = "relative";
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Show the progress animation
function progressFunction() {
  if (
    document.body.scrollTop >= 600 ||
    (document.documentElement.scrollTop >= 600 && flag)
  ) {
    for (let idx = 0; idx < len; idx++) {
      let endVal = counter[idx].innerHTML;
      let percent = parseInt(endVal);
      setProgress[idx].style.width = `${percent}%`;
      setProgress[idx].style.background =
        "linear-gradient(to right, #7875fc 0%, #89ecff 100%)";
      setProgress[idx].style.transition = "0.7s ease-in ";
    }
    flag = false;
  }
}

window.onscroll = function () {
  scrollFunction();
  progressFunction();
  increasePercent();
};

let exp = document.getElementById("exp");
let ed = document.getElementById("ed");

exp.addEventListener("click", () => {
  exp.style.background = "white";
  exp.style.color = "black";
  ed.style.background = "rgba(255, 255, 255, 0.1)";
  ed.style.color = "white";
});

ed.addEventListener("click", () => {
  ed.style.background = "white";
  ed.style.color = "black";
  exp.style.background = "rgba(255, 255, 255, 0.1)";
  exp.style.color = "white";
});

let home = document.querySelectorAll(".home");
let about = document.querySelectorAll(".about");
let services = document.querySelectorAll(".services");
let skills = document.querySelectorAll(".skills");
let portfolio = document.querySelectorAll(".pf");
let stories = document.querySelectorAll(".stories");
let contacts = document.querySelectorAll(".contacts");

console.log(document.documentElement.scrollTop);

home.forEach((val)=>{
  val.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
  });
});

portfolio.forEach((val)=>{
  val.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
  });
});

about.forEach((val)=>{
  val.addEventListener("click",()=>{
    document.documentElement.scrollTop = 890;
  });
});

services.forEach((val)=>{
  val.addEventListener("click",()=>{
    document.documentElement.scrollTop = 2362;
  });
});

skills.forEach((val)=>{
  val.addEventListener("click",()=>{
    document.documentElement.scrollTop = 3162;
  });
});

