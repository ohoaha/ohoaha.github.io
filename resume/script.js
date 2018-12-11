window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "3rem";
    document.getElementById("header").style.lineHeight = "6rem";
  } else {
    document.getElementById("header").style.fontSize = "6rem";
    document.getElementById("header").style.lineHeight = "14rem";
  }
}
