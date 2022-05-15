const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const profileImage = document.querySelector(".profile-image");
const bioParagraph = document.querySelector(".bio-paragraph");
const profileName = document.querySelector(".profile-name");
const occupation = document.querySelector(".occupation");
const johnsBio = document.querySelector(".johns-bio-paragraph");
const johnsProfileName = document.querySelector(".johns-profile-name");
const johnsOccupation = document.querySelector(".johns-occupation");
nextBtn.addEventListener("click", () => {
  profileImage.classList.toggle("switch");
  bioParagraph.classList.toggle("display-none");
  profileName.classList.toggle("display-none");
  occupation.classList.toggle("display-none");
  johnsBio.classList.toggle("display-block");
  johnsProfileName.classList.toggle("display-block");
  johnsOccupation.classList.toggle("display-inline");
});

prevBtn.addEventListener("click", () => {
  profileImage.classList.toggle("switch");
  bioParagraph.classList.toggle("display-none");
  profileName.classList.toggle("display-none");
  occupation.classList.toggle("display-none");
  johnsBio.classList.toggle("display-block");
  johnsProfileName.classList.toggle("display-inline");
  johnsOccupation.classList.toggle("display-inline");
});
