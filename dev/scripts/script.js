document.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 778) {
    document.getElementById("navbar").classList.add("nav-bg");
  } else {
    document.getElementById("navbar").classList.remove("nav-bg");
  }
});
