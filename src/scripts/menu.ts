document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector(".hamburger")

  if (!target) return;

  target.addEventListener("click", () => {
    document.querySelector('.nav-links')?.classList.toggle('expanded');
  })
})
