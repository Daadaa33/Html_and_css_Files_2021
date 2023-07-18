let Button = document.getElementById("button");
let mobileSide = document.getElementById("mobileSide");

let menuSide = true;

Button.addEventListener("click", () => {
  mobileSide.style.display = "none";
});

console.log(menuSide);
