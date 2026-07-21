document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(button.dataset.copy);
    const previous = button.textContent;
    button.textContent = 'Kopiert';
    setTimeout(() => { button.textContent = previous; }, 1800);
  });
});
