document.getElementById('rsvp-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Спасибо! Ваше подтверждение получено.');
  e.target.reset();
});
