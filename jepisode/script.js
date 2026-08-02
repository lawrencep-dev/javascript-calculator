const number = document.getElementsByClassName("number");
const display = document.getElementById("display");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", clicked);
}

function clicked(event) {
  let lastCharacter = display.value[display.value.length - 1];
  if (event.target.textContent === "=") {
    display.value = display.value.replaceAll("x", "*");
    display.value = display.value.replaceAll("÷", "/");
    display.value = eval(display.value);
  } else if (event.target.textContent === "C") {
    display.value = "";
  } else if (event.target.textContent === "⌫") {
    display.value = display.value.slice(0, display.value.length - 1);
  } else if (
    (lastCharacter === "+" ||
      lastCharacter === "-" ||
      lastCharacter === "x" ||
      lastCharacter === "÷" ||
      lastCharacter === ".") &&
    (event.target.textContent === "+" ||
      event.target.textContent === "-" ||
      event.target.textContent === "x" ||
      event.target.textContent === "÷" ||
      event.target.textContent === ".")
  ) {
  } else {
    display.value += event.target.textContent;
  }
}
