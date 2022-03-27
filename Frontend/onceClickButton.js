const buttonElement = document.getElementById("btn");

buttonElement.addEventListener("click", () => {
  console.log("Clicked");
  buttonElement.disabled = true;
});

buttonElement.addEventListener(
  "click", 
  () => {
    console.log("Clicked");
  }, 
  { once: true }
);