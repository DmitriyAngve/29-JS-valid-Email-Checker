const btn = document.querySelector("button");
const myInput = document.querySelector("input");
const results = document.querySelector(".results0");

myInput.value = "dmitriy@gmail.com";
const regExp1 = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+)/gi;

btn.addEventListener("click", () => {
  console.log(regExp1.test(myInput.value));
});
