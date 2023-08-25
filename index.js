const menuBtn = document.querySelector(".menu");
const menubtn = document.querySelector(".menu-btn");

const menus = document.querySelector(".menus");

const menuChildren = menus.children;
const navigationList = Array.from(document.querySelectorAll(".nav--list"));
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

// Observe element
const targetElement = document.querySelector(".contact");

function handleContactIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Change the background color of the contact element
      targetElement.style.backgroundColor = "#2c2c4c"; // Change to your desired color
      targetElement.style.transition = "background-color 3s ease"; // Set the transition
      // Other styling changes
    } else {
      targetElement.style.backgroundColor = "white";
    }
  });
}

// Create an observer instance for the contact element
const contactObserver = new IntersectionObserver(handleContactIntersection, {
  root: null,
  threshold: 0.5,
});

// Start observing the contact element
contactObserver.observe(targetElement);

// Observe project element project two start
const targetProjectElementTwo = document.querySelector(".project--two");

function handleProjectIntersectionTwo(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Change the width of the project element
      targetProjectElementTwo.classList.add("expanding");
      targetProjectElementTwo.style.width = "100%";
      targetProjectElementTwo.style.transition = "width ease 1s";
      // Other styling changes
    } else {
      targetProjectElementTwo.style.width = "0%";
    }
  });
}

// Create an observer instance for the project element
const projectObserverTwo = new IntersectionObserver(
  handleProjectIntersectionTwo,
  {
    root: null,
    threshold: 0.5,
  }
);

// Start observing the project elementtwo
projectObserverTwo.observe(targetProjectElementTwo);
//end

// Observe project element
const targetProjectElement = document.querySelector(".project--one");

function handleProjectIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Change the width of the project element
      targetProjectElement.classList.add("expanding");
      targetProjectElement.style.width = "100%";
      targetProjectElement.style.transition = "width ease 1s";
      // Other styling changes
    } else {
      targetProjectElement.style.width = "0%";
    }
  });
}

// Create an observer instance for the project element
const projectObserver = new IntersectionObserver(handleProjectIntersection, {
  root: null,
  threshold: 0.5,
});

// Start observing the project element
projectObserver.observe(targetProjectElement); //end

// Observe project element start
const targetProjectElementThree = document.querySelector(".project--three");

function handleProjectIntersectionThree(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Change the width of the project element
      targetProjectElementThree.classList.add("expanding");
      targetProjectElementThree.style.width = "100%";
      targetProjectElementThree.style.transition = "width ease 1s";
      // Other styling changes
    } else {
      targetProjectElementThree.style.width = "0%";
    }
  });
}

// Create an observer instance for the project element
const projectObserverthree = new IntersectionObserver(
  handleProjectIntersectionThree,
  {
    root: null,
    threshold: 0.5,
  }
);

// Start observing the project element
projectObserverthree.observe(targetProjectElementThree);

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

//paralax of spongebob
const spongebobHang = document.querySelector(".spongebob--hang");
const contactSection = document.querySelector(".contact");

window.addEventListener("scroll", () => {
  const contactRect = contactSection.getBoundingClientRect();
  const scrollPosition = window.scrollY;

  if (window.matchMedia("(max-width: 500px)").matches) {
    spongebobHang.style.width = "100px";
    spongebobHang.style.height = "100px";
  }

  if (contactRect.top <= window.innerHeight && contactRect.bottom >= 0) {
    const parallaxValue = scrollPosition / 7 - 400;
    const parallaxValueX = scrollPosition / 10 - 200;
    spongebobHang.style.transform = `translateX(${parallaxValue}px)`;
    // spongebobHang.style.transform = `translateY(${parallaxValueX}px)`;
  }
});

//show icon

const projectOne = document.querySelector(".project--one");
const projectTitle = document.querySelector(".small--project--title");
const gitIcon = document.querySelector(".github");
const codeIcon = document.querySelector(".code");

projectOne.addEventListener("mouseover", () => {
  gitIcon.classList.add("icon--slide");
  codeIcon.classList.add("icon--slide");
  projectTitle.classList.add("title--slide");
});

projectOne.addEventListener("mouseout", () => {
  gitIcon.classList.remove("icon--slide");
  projectTitle.classList.remove("title--slide");
  codeIcon.classList.remove("icon--slide");
});

const projecttwo = document.querySelector(".project--two");
const projectTitleTwo = document.querySelector(".small--project--title--two");
const gitIconTwo = document.querySelector(".github--two");
const codeIconTwo = document.querySelector(".code--two");

projecttwo.addEventListener("mouseover", () => {
  gitIconTwo.classList.add("icon--slide");
  codeIconTwo.classList.add("icon--slide");
  projectTitleTwo.classList.add("title--slide");
});

projecttwo.addEventListener("mouseout", () => {
  gitIconTwo.classList.remove("icon--slide");
  projectTitleTwo.classList.remove("title--slide");
  codeIconTwo.classList.remove("icon--slide");
});

const projectthree = document.querySelector(".project--three");
const projectTitlethree = document.querySelector(
  ".small--project--title--three"
);
const gitIconthree = document.querySelector(".github--three");
const codeIconthree = document.querySelector(".code--three");

projectthree.addEventListener("mouseover", () => {
  gitIconthree.classList.add("icon--slide");
  codeIconthree.classList.add("icon--slide");
  projectTitlethree.classList.add("title--slide");
});

projectthree.addEventListener("mouseout", () => {
  gitIconthree.classList.remove("icon--slide");
  projectTitlethree.classList.remove("title--slide");
  codeIconthree.classList.remove("icon--slide");
});
