const celciusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemperature(event) {
  const currentValue = parseFloat(event.target.value);
  const unitType = event.target.name;

  switch (unitType) {
    case "celcius":
      kelvinEl.value = (currentValue + 273.15).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celciusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = (((currentValue - 32) / 1.8) + 273.15).toFixed(2);
      break;
    case "kelvin":
      celciusEl.value = (currentValue - 273.15).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      console.log("Invalid unit!");
      break;
  }
}
