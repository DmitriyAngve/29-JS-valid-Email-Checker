const btn = document.querySelector("button");
const myInput = document.querySelector("input");
const results = document.querySelector(".results");

myInput.value = "dmitriy@gmail.com";
const regExp1 = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+)/gi;

btn.addEventListener("click", () => {
  if (regExp1.test(myInput.value)) {
    results.style.color = "green";
    results.textContent = "Valid Email :)";
  } else {
    results.style.color = "red";
    results.textContent = "Not an Email!";
  }
});
