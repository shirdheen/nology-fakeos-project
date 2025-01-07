// Function to make sure that one modal lies on top of the other

export const openModal = (modal) => {
  const allModals = document.querySelectorAll(".modal");
  allModals.forEach((m) => {
    m.style.zIndex = "10";
  });

  modal.style.display = "block";
  modal.style.zIndex = "20";
};

export const closeModal = (modal) => {
  modal.style.display = "none";
  modal.style.zIndex = "10";
};
