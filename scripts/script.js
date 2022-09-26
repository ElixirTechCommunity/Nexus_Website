document.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 590) {
    document.getElementById("navbar").classList.add("nav-bg");
  } else {
    document.getElementById("navbar").classList.remove("nav-bg");
  }
});

// update stylesheets
const getStyleSheets = () => {
  const files =
    "style.css/global.css/utils.css/header.css/homePage.css/aboutPage.css/schedule.css/themePage.css/faqPage.css/footer.css/team.css/sponsor.css/avatars.css/contactForm.css/animation.css".split(
      "/"
    );
  var styleSheetsHTML = "";
  files.forEach(
    (name) =>
      (styleSheetsHTML += ` <link rel="stylesheet" href="./styles/${name}">`)
  );
  console.log(styleSheetsHTML);
  return styleSheetsHTML;
};

if (window.location.href != "https://hacknexus.me/") {
  document.querySelector("head").innerHTML += getStyleSheets();
}
