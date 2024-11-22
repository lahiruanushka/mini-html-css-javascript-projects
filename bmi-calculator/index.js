const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = parseFloat(document.getElementById("height").value);
  const weightValue = parseFloat(document.getElementById("weight").value);

  // Check if height or weight is missing or invalid
  if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
    bmiInputEl.value = "Invalid input";
    weightConditionEl.innerText = "";
    return;
  }

  // Formula: [weight (kg) / height (cm) / height (cm)] x 10,000
  const bmiValue = (weightValue / (heightValue * heightValue)) * 10000;

  // Set BMI value rounded to 2 decimal places
  bmiInputEl.value = bmiValue.toFixed(2);

  // Set weight condition based on BMI
  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Underweight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else {
    weightConditionEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
