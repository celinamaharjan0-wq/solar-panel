// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Optional: Simple ROI calculator (benefits page)
  const calcForm = document.getElementById('roi-calculator');
  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const bill = parseFloat(document.getElementById('monthly-bill').value) || 0;
      const savings = bill * 0.75 * 12; // rough 75% savings
      document.getElementById('result').innerHTML = `
        <strong>Estimated yearly saving:</strong> NPR ${savings.toLocaleString()} 
        <br><small>(after solar installation – approximate)</small>`;
    });
  }
});