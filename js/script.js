// Media Menu==========================================
const popup = document.querySelector(".popup");
const burger = document.querySelector(".media-burger");
burger.addEventListener("click", menuHandler);
const body = document.body;

function menuHandler(e) {
  console.log("ghoiwghiwr");
  e.preventDefault();
  popup.classList.toggle("popup-normal");
  burger.classList.toggle("active");
  body.classList.toggle("noscroll");
}
