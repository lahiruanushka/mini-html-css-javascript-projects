const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTime;

function updateResults() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please enter a valid number!";

    clearTimeout(errorTime);
    console.log(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
    }, 2000);
  } else {
    resultEl.innerText = (+inputEl.value / 2.0).toFixed(2);
    
  }
}

inputEl.addEventListener("input", updateResults);
