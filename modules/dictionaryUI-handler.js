export const dictionaryApp = () => {
  const dictionaryIcon = document.querySelector(".fa-book");
  const dictionaryModal = document.getElementById("dict-modal");
  const closeDictionaryModal = document.getElementById("closeDictModal");
  const dictionaryForm = document.getElementById("dictForm");
  const dictionaryData = document.getElementById("dictionaryData");

  dictionaryIcon.addEventListener("click", () => {
    dictionaryModal.style.display = "block";
  });

  closeDictionaryModal.addEventListener("click", () => {
    dictionaryModal.style.display = "none";
    dictionaryData.textContent = "";
    dictionaryForm.reset();
  });

  dictionaryForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const word = document.getElementById("word").value.trim();
    dictionaryData.textContent = "Loading...";

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!response) {
        throw new Error("Word not found");
      }
      const data = await response.json();
      console.log("Dictionary data: ", data);
      const definitions = data[0].meanings
        .map(
          (meaning) =>
            `${meaning.partOfSpeech}: ${meaning.definitions[0].definition}`
        )
        .join("<br>");
      console.log("Definitions: ", definitions);
      if (definitions) {
        dictionaryData.innerText = `<strong>${word}</strong><br>${definitions}`; // Word will be bold, and the definitions will begin on the next line
      } else {
        dictionaryData.style.display = "none";
      }
    } catch (error) {
      dictionaryData.textContent = `Error: ${error.message}`;
    }
  });
};
