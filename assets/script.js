const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
let slidesOrder = 0;
const banner = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

arrowLeft.addEventListener("click", () => {
  slidesOrder--;
  banner.src = `./assets/images/slideshow/${slides[slidesOrder].image}`;
  tagLine.innerHTML = slides[slidesOrder].tagLine;

  for (let i = 0; i < slides.length; i++) {
    let dot = document.getElementsByClassName("dot")[i];
    if (i === slidesOrder) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
});

arrowRight.addEventListener("click", () => {
  slidesOrder++;
  banner.src = `./assets/images/slideshow/${slides[slidesOrder].image}`;
  tagLine.innerHTML = slides[slidesOrder].tagLine;

  for (let i = 0; i < slides.length; i++) {
    let dot = document.getElementsByClassName("dot")[i];
    if (i === slidesOrder) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
});

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);

  if (i === slidesOrder) {
    dot.classList.add("dot_selected");
  }
}
