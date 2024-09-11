const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emojis = [];

// Function to Fetch Emojies from API
async function getEmojis() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=api_key"
  );

  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    // Remove the 'E[number].[number]' part from the unicodeName
    const cleanUnicodeName = data[i].unicodeName.replace(/E\d+\.\d+\s*/, "");

    emojis.push({
      emojiName: data[i].character,
      emojiCode: cleanUnicodeName,
    });
  }
}

getEmojis();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emojis.length);
  btnEl.innerText = emojis[randomNum].emojiName;
  emojiNameEl.innerText = emojis[randomNum].emojiCode;
  emojiNameEl.style.display = "block";
});
