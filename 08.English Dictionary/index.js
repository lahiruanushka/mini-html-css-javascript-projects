const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const wordEl = document.getElementById("word-text");
const phoneticsEl = document.getElementById("phonetics-text");
const definitionsEl = document.getElementById("definitions");
const synonymsEl = document.getElementById("synonyms");
const antonymsEl = document.getElementById("antonyms");
const audioEl = document.getElementById("audio");
const sourceLinkEl = document.getElementById("source-link");

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block";
    infoTextEl.innerText = `Searching for "${word}"...`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    infoTextEl.style.display = "none";

    if (result.title) {
      meaningContainerEl.style.display = "block";
      wordEl.innerText = result.title;
      phoneticsEl.innerText = "";
      definitionsEl.innerHTML = "";
      synonymsEl.innerText = "";
      antonymsEl.innerText = "";
      audioEl.style.display = "none";
    } else {
      const data = result[0];
      meaningContainerEl.style.display = "block";
      wordEl.innerText = data.word;

      // Phonetics
      phoneticsEl.innerText = data.phonetics[0]?.text || "N/A";
      audioEl.style.display = data.phonetics[0]?.audio ? "block" : "none";
      if (data.phonetics[0]?.audio) {
        audioEl.src = data.phonetics[0].audio;
      }

      // Definitions
      definitionsEl.innerHTML = data.meanings[0].definitions.map(def => `<p>${def.definition}</p>`).join("");

      // Synonyms
      synonymsEl.innerText = data.meanings[0].synonyms.length ? data.meanings[0].synonyms.join(", ") : "N/A";

      // Antonyms
      antonymsEl.innerText = data.meanings[0].antonyms.length ? data.meanings[0].antonyms.join(", ") : "N/A";

      // Source
      sourceLinkEl.href = data.sourceUrls[0];
    }
  } catch (error) {
    meaningContainerEl.style.display = "block";
    wordEl.innerText = "An error occurred. Please try again.";
    console.error(error);
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
