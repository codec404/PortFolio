console.log("Hello Contact");

let mybutton = document.getElementById("myBtn");

window.onscroll = () => {
  scrollFunction();
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
