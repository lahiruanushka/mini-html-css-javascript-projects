const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);

updateRate();

function updateRate() {
  try {
    fetch(
      `https://v6.exchangerate-api.com/v6/api_key/latest/${currencyFirstEl.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        const rate = data.conversion_rates[currencySecondEl.value];
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
          rate + " " + currencySecondEl.value
        }`;

        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
      });
  } catch (error) {
    exchangeRateEl.innerText ="Unexpected Error occured! Please try agian";
    console.log(error)
  }
}
