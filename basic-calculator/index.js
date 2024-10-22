const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;

    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "DEL") {
      deleteLastInput();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  try {
    inputFieldEl.value = eval(inputFieldEl.value);
  } catch (error) {
    inputFieldEl.value = "Error"; // Handle any eval errors
  }
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}

function deleteLastInput() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1); // Remove last character
}
