const btnShare = document.querySelector(".icon-share-container");
const message = document.querySelector(".message-share-container");
const container = document.querySelector(".message-and-icon-container");

btnShare.addEventListener("click", (e) => {
  message.classList.toggle("message-hide");
  container.classList.toggle("fixed");
});

const btnShareMobileBefore = document.querySelector(
  ".icon-share-container-mobile-before"
);
const btnShareMobileAfter = document.querySelector(
  ".icon-share-container-mobile-after"
);
const presentationMobile = document.querySelector(".options-container-mobile");
const messageMobile = document.querySelector(".mobile-share-popup");

btnShareMobileBefore.addEventListener("click", (e) => {
  console.log("hola");
  presentationMobile.classList.toggle("hide");
  messageMobile.classList.toggle("popup-hide");
});

btnShareMobileAfter.addEventListener("click", (e) => {
  console.log("hola");
  presentationMobile.classList.toggle("hide");
  messageMobile.classList.toggle("popup-hide");
});
