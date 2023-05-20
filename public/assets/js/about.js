console.log("Hello Contact");

let mybutton = document.getElementById("myBtn");

window.onscroll = () => {
  scrollFunction();
  increasePercent();
  progressFunction();
};

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
}

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

let flag = true; // Only  once set
let inc = true; // Only  once set
let setProgress = document.querySelectorAll(".progress-bar");
let counter = document.querySelectorAll(".count");
let len = setProgress.length;
let interval = 900;

const increasePercent = () => {
    if (
      document.body.scrollTop >= 800 ||
      (document.documentElement.scrollTop >= 800 && inc)
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

  function progressFunction() {
    if (
      document.body.scrollTop >= 800 ||
      (document.documentElement.scrollTop >= 800 && flag)
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