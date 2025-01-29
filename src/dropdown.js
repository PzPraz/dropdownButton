import "./dropdown.css";

const dropDownButton = document.querySelector(".dropbtn");
const dropDownContent = document.querySelector(".dropdown-content");

dropDownButton.addEventListener("click", (e) => {
  e.preventDefault();
  dropDownContent.classList.toggle("visible");
});
