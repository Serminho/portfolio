const menuMobile = document.getElementById("menu-mobile");
const navLinks = document.querySelector(".nav-links");

menuMobile.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

const elements = document.querySelectorAll(".card, .skill-card, .project-card");

elements.forEach((el) => {
  el.classList.add("hidden");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  },
);

elements.forEach((el) => {
  observer.observe(el);
});

// MÚSICA

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let playing = false;

music.volume = 0.08;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();

    playing = true;

    musicBtn.classList.add("playing");
  } else {
    music.pause();

    playing = false;

    musicBtn.classList.remove("playing");
  }
});

const volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("input", () => {
  music.volume = volumeSlider.value;
});
