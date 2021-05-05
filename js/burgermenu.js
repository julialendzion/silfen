
//BURGER MENU WORKING//
document
  .querySelector("#burgermenuBtn")
  .addEventListener("click", ShowBurgermenu);

function ShowBurgermenu() {
  document.querySelector("#cos").classList.toggle("burgerContent");
  document.querySelector("#cos").classList.toggle("burgerContentOpen");
  console.log("show menu");
}
