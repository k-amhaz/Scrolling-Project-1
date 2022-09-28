let section = document.querySelector(".the");
let spans = document.querySelectorAll(".the span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
