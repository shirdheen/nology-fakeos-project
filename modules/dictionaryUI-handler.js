import { openModal, closeModal } from "./modal-handler.js";

export const dictionaryApp = () => {
  const dictionaryIcon = document.querySelector(".fa-book");
  const dictionaryModal = document.getElementById("dict-modal");
  const closeDictionaryModal = document.getElementById("closeDictModal");
  const dictionaryForm = document.getElementById("dictForm");
  const dictionaryData = document.getElementById("dictionaryData");

  dictionaryIcon.addEventListener("click", () => {
    openModal(dictionaryModal);
  });

  closeDictionaryModal.addEventListener("click", () => {
    closeModal(dictionaryModal);
    dictionaryData.textContent = "";
    dictionaryData.style.display = "none";
    dictionaryForm.reset();
  });

  dictionaryForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const word = document.getElementById("word").value.trim();

    try {
      dictionaryData.style.display = "block";
      dictionaryData.innerText = "Loading...";
      console.log("Loading message displayed");

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay is introduced so that "Loading..." could be displayed

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
        dictionaryData.style.display = "block";
        dictionaryData.innerHTML = `<strong>${word}</strong><br>${definitions}`; // Word will be bold, and the definitions will begin on the next line
      } else {
        dictionaryData.style.display = "none";
      }
    } catch (error) {
      dictionaryData.textContent = `Error: ${error.message}`;
    }
  });
};
