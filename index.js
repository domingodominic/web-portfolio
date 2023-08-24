const menuBtn = document.querySelector(".menu");
const menubtn = document.querySelector(".menu-btn");

const menus = document.querySelector(".menus");

const menuChildren = menus.children;
const navigationList = Array.from(document.querySelectorAll(".nav--list"));
console.log(navigationList);
const navList = document.querySelector(".menus");
const moons = document.querySelector(".moons");

navigationList.forEach((list) => {
  list.addEventListener("click", () => {
    menubtn.src = "menu.png";
  });
});

menuBtn.addEventListener("click", function () {
  navList.classList.toggle("leftMe");
  if (menubtn.src.includes("menu.png")) {
    menubtn.src = "x.png";
  } else {
    menubtn.src = "menu.png";
  }
});

for (i = 0; i < menuChildren.length; i++) {
  menuChildren.item(i).addEventListener("click", function () {
    navList.classList.remove("leftMe");
  });
}

document.querySelectorAll(`a[href^="#"]`).forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const skillHeader = document.querySelector(".skill-header");
const html = document.querySelector(".html");
const skills = document.querySelector(".skill");
const Mainskills = document.querySelector(".skills");
const skillChild = skills.children;

const myPhoto = document.querySelector(".my-photo");
const myProfile = document.querySelector(".my-profile");
const secTextDark = document.querySelector("#sec-text");

let intervalID = null;

const moon = document
  .querySelector(".moon")
  .addEventListener("click", function () {
    if (moons.src.includes("moon-dark.png")) {
      moons.src = "moon-light.png";
    } else {
      moons.src = "moon-dark.png";
    }
    document.body.classList.toggle("dark-mode");

    secTextDark.classList.toggle("sec-text");
    secTextDark.classList.toggle("sec-text-dark");
    clearInterval(intervalID); // Clear the setInterval
    let intervalID = setInterval(setText, 4000); // Start the setInterval again

    if (document.body.classList.contains("dark-mode")) {
      for (i = 0; i < skillChild.length; i++) {
        skillChild.item(i).style.boxShadow = "none !important";
      }
      Mainskills.style.boxShadow = "none";
      myProfile.src = `my-profile-dm.png`;
      moons.src = "moon-light.png";
    } else {
      for (i = 0; i < skillChild.length; i++) {
        skillChild.item(i).style.boxShadow =
          "5px 5px 10px #b3b3b3, -5px -5px 10px #ffffff";
      }

      myProfile.src = `my-profile.png`;
    }
  });
//observe element
const targetElement = document.querySelector(".contact");

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Change the background color of the background-change-element

      targetElement.style.backgroundColor = "#2c2c4c"; // Change to your desired color
      targetElement.style.transition = "background-color 3s ease"; // Set the transition
      title.style.color = "white";
      // Disconnect the observer since the action is performed
    } else {
      targetElement.style.backgroundColor = "white";
    }
  });
}

// Create an observer instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  threshold: 0.5, // The ratio of the target element's visibility needed to trigger the callback
});

// Target the target element to be observed

// Start observing the target element
observer.observe(targetElement);

//scroll to top function
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  // If the user scrolls down more than 20 pixels, show the button
  if (window.pageYOffset > 20) {
    scrollToTopBtn.style.display = "block";
    scrollToTopBtn.classList.add("scroll-translate");
  } else {
    scrollToTopBtn.style.display = "none";
    scrollToTopBtn.classList.remove("scroll-translate");
  }
});

// Add a click event listener to the button
scrollToTopBtn.addEventListener("click", function () {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//type writter

const text = document.querySelector("#sec-text");
const texts = ["React Developer", "UI/UX Designer", "Front-end Developer"];
var i = 0;

function setText() {
  text.textContent = texts[i];

  if (i == texts.length - 1) {
    i = 0;
  } else {
    i++;
  }
}

setInterval(setText, 4300);

function loader() {
  let loaders = document.querySelector(".loaders");
  let D = document.querySelector(".D");

  loaders.classList.add("loader-hide");
  D.classList.add(".loader-hide");
}
setTimeout(loader, 2000);

function extraLoad() {
  let extraLoader = document.querySelector(".extra-loader");
  extraLoader.classList.add("loader-hide");
}
setTimeout(extraLoad, 7000);
function fadeBody() {
  document.body.classList.add("fade--body");
}
setTimeout(fadeBody, 7000);
