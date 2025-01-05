// Function to make sure that one modal lies on top of the other

export const openModal = (modal) => {
  modal.style.display = "block";
  modal.style.zIndex = "20";

  const weatherModal = document.getElementById("weatherModal");
  const menuModal = document.getElementById("menu-modal");

  if (modal === weatherModal) {
    menuModal.style.zIndex = "10";
  } else if (modal === menuModal) {
    weatherModal.style.zIndex = "10";
  }
};

export const closeModal = (modal) => {
  modal.style.display = "none";
  modal.style.zIndex = "10";
};
