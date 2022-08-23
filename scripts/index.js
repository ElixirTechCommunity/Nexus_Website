const pages = ["about", "themes"];

// load Content js start here

/**
 * load page content
 * @param {Number} page
 * @param {Boolean} isReload
 */
const load = async (page, isReload = false, direction = "left") => {
  document
    .querySelectorAll(".toggle-btn")
    .forEach((btn) => (btn.disabled = true));
  var mid_data = "";
  var left_data = "";
  var right_data = "";

  const previous_slide = page ? page - 1 : pages.length - 1;
  const next_slide = (page + 1) % pages.length;

  fetch("./content/" + pages[page] + ".html")
    .then((response) => response.text())
    .then((data) => {
      mid_data = data;
    });
  fetch("./content/" + pages[next_slide] + ".html")
    .then((response) => response.text())
    .then((data) => {
      right_data = data;
    });
  fetch("./content/" + pages[previous_slide] + ".html")
    .then((response) => response.text())
    .then((data) => {
      left_data = data;
      if (isReload) {
        document.querySelector(".loader").classList.add("fadeOut");
        setTimeout(() => {
          document.querySelector(".loader").classList.add("no-display");
        }, 1000);
      }
    });

  //
  if (direction === "left") {
    document.getElementById("main-content").classList.add("slide-left");
    document.querySelector(".right-slide").classList.add("slide-left");
    document.querySelector(".left-slide").classList.add("slide-left");
    setTimeout(() => {
      document.getElementById("main-content").classList.remove("slide-left");
      document.querySelector(".right-slide").classList.remove("slide-left");
      document.querySelector(".left-slide").classList.remove("slide-left");
    }, 1000);
  } else {
    document.getElementById("main-content").classList.add("slide-right");
    document.querySelector(".right-slide").classList.add("slide-right");
    document.querySelector(".left-slide").classList.add("slide-right");
    setTimeout(() => {
      document.getElementById("main-content").classList.remove("slide-right");
      document.querySelector(".right-slide").classList.remove("slide-right");
      document.querySelector(".left-slide").classList.remove("slide-right");
    }, 1000);
  }
  setTimeout(() => {
    document.getElementById("main-content").innerHTML = mid_data;
    document.querySelector(".right-slide").innerHTML = right_data;
    document.querySelector(".left-slide").innerHTML = left_data;
    document
      .querySelectorAll(".toggle-btn")
      .forEach((btn) => (btn.disabled = false));
  }, 1000);
};

/**
 *
 * @param {Object} event
 */
const next = (event) => {
  page_serve = (page_serve + 1) % pages.length;
  // console.log(page_serve);
  load(page_serve);
};
/**
 *
 * @param {Object} event
 */
const previous = (event) => {
  if (!page_serve) page_serve = pages.length - 1;
  else page_serve -= 1;
  page_serve = page_serve % pages.length;
  console.log(page_serve);
  load(page_serve, false, "right");
};

// load content js ends here

// initial load page content
var page_serve = window.location.search.split("=");
page_serve = page_serve.length > 1 ? page_serve[page_serve.length - 1] : 0;
load(page_serve, true);

// page toggle
document.getElementById("next").addEventListener("click", next);
document.getElementById("previous").addEventListener("click", previous);

// scrolling navigation

// document.querySelector("body").addEventListener("scroll", () => {
//   const dimension = document
//     .querySelector(".web-bottom-container")
//     .getClientRects();
//   if (dimension[0].top < 295) {
//     // console.log('hii')
//     document
//       .querySelector(".main-logo-container")
//       .classList.add("navigation-logo");
//     document.querySelector(".main-logo-container").classList.add("spin");
//   } else {
//     document
//       .querySelector(".main-logo-container")
//       .classList.remove("navigation-logo");
//     document.querySelector(".main-logo-container").classList.remove("spin");
//   }
// });
