document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const primaryColorInput = document.getElementById('primaryColor');
  const textSizeInput = document.getElementById('textSize');
  const resetBtn = document.getElementById('resetBtn');

  // Update primary color variable
  primaryColorInput.addEventListener('input', (e) => {
    root.style.setProperty('--primary-color', e.target.value);
  });

  // Update text size variable
  textSizeInput.addEventListener('input', (e) => {
    root.style.setProperty('--text-size', `${e.target.value}px`);
  });

  // Reset all variables
  resetBtn.addEventListener('click', () => {
    root.style.removeProperty('--primary-color');
    root.style.removeProperty('--text-size');
    primaryColorInput.value = '#3498db';
    textSizeInput.value = '16';
  });
});