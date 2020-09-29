const toggleButton = document.getElementById("toggle-button");

const navbarLinks = document.getElementsByClassName("nav1")[0];

toggleButton.addEventListener("click", () => {
  console.log("im clicked");
  navbarLinks.classList.toggle("active");
});
