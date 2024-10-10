const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;

  if (birthdayValue === "") {
    alert("Please Enter a birthday");
    return;
  }

  const birthdayDate = new Date(birthdayValue);
  const currentDate = new Date();

  // Validate if the birthday is in the future
  if (birthdayDate > currentDate) {
    alert("Birthday cannot be in the future.");
    return;
  }

  const { years, months } = getAgeInMonths(birthdayDate);
  resultEl.innerText = `Your age is ${years} ${years > 1 ? "years" : "year"} and ${months} ${months > 1 ? "months" : "month"} old.`;
  resultEl.style.display = "block";
}

function getAgeInMonths(birthdayDate) {
  const currentDate = new Date();
  let years = currentDate.getFullYear() - birthdayDate.getFullYear();
  let months = currentDate.getMonth() - birthdayDate.getMonth();

  // Adjust if current month is earlier than birthday month
  if (months < 0) {
    years--;
    months += 12;
  }

  // If the current day is earlier than the birthday day, adjust months
  if (currentDate.getDate() < birthdayDate.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  return { years, months };
}

btnEl.addEventListener("click", calculateAge);
