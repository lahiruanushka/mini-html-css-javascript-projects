const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const quoteDiv = document.getElementById("quote-div");
const errorEl = document.getElementById("error-text");
const loadingEl = document.getElementById("loading");

const apiURL = "https://api.quotable.io/quotes/random";

async function getQuote() {
  try {
    quoteDiv.style.display = "none";
    loadingEl.style.display = "block";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..";
    errorEl.style.display = "none";

    const response = await fetch(apiURL);
    const data = await response.json();

    const quoteContent = data[0].content;
    const quoteAuthor = data[0].author;

    quoteEl.innerText = quoteContent;
    authorEl.innerText = `~${quoteAuthor}`;
    quoteDiv.style.display = "block";
  } catch (error) {
    console.error(error);
    errorEl.style.display = "block";
    errorEl.innerText = "An error occurred. Please try again";
  } finally {
    loadingEl.style.display = "none";
    btnEl.disabled = false;
    btnEl.innerText = "Get a Quote";
  }
}

btnEl.addEventListener("click", getQuote);

// Fetch a quote when the page loads
getQuote();
