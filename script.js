// Keep each card's label in sync with its expandable fun fact.
document.querySelectorAll('.fun-fact').forEach((fact) => {
  const label = fact.querySelector('.fact-label');
  if (!label) return;

  const updateLabel = () => {
    label.textContent = fact.open ? 'Hide fun fact' : 'Show fun fact';
  };

  fact.addEventListener('toggle', updateLabel);
  updateLabel();
});
