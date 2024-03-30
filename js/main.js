const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const link = document.querySelectorAll(".menu-link");

burger.addEventListener("click", () => {
  nav.classList.toggle("burger-active");
  document.body.classList.toggle("stop-scrol");
});

link.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("burger-active");
    document.body.classList.remove("stop-scrol");
  });
});

link.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
