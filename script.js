const imageHeight =0;


window.onscroll = function() {
  scrollFunction()
};
// adding active class after scroll of image height and removing it when scroll is less than it. 
function scrollFunction() {
  if (document.body.scrollTop > imageHeight || document.documentElement.scrollTop > imageHeight) {
    document.getElementById("navbar").classList.add("active");
  } else {
    document.getElementById("navbar").classList.remove("active");
  }
}