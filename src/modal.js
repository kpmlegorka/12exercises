const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

setTimeout("modal.classList.add('open-modal')", 0);

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
