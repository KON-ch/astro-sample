document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector("h1")

  if (!target) return;

  target.addEventListener("click", () => {
    document.querySelector('.hamburger')?.classList.toggle('expanded');
  })
})
