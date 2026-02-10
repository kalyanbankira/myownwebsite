// Select all levels
const levels = document.querySelectorAll(".level");

levels.forEach(level => {
  level.addEventListener("click", () => {
    // Close other levels
    levels.forEach(l => {
      if (l !== level) l.classList.remove("active");
    });

    // Toggle clicked one
    level.classList.toggle("active");
  });
});
