function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;
  interestRateValue = document.getElementById("interest-rate").value;
  monthsToPayValue = document.getElementById("months-to-pay").value;

  interest = (loanAmountValue * (interestRateValue) * (interestRateValue * 0.01)) / monthsToPayValue

  monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2)

  document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
}
