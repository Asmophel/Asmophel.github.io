window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop >= 30) {
    document.getElementById("navbar").style.padding = "15px 10px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
  }
}
