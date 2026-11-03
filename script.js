document.getElementById('rsvp-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Спасибо! Ваше подтверждение получено.');
  e.target.reset();
 <script>
  const musicBtn = document.getElementById('music-toggle');
  const audio = document.getElementById('wedding-music');
  const icon = musicBtn.querySelector('.icon');

  // Изначальное состояние: кнопка неактивна (пульсирует)
  musicBtn.classList.add('inactive');

  musicBtn.addEventListener('click', () => {
    const isPlaying = !audio.paused;

    if (isPlaying) {
      // Музыка играет -> ставим на паузу
      audio.pause();
      musicBtn.classList.remove('active');
      musicBtn.classList.add('inactive');
      icon.textContent = '🎵';
    } else {
      // Музыка на паузе -> пробуем запустить
      audio.play().catch(error => {
        console.log('Автовоспроизведение заблокировано браузером.');
        // Можно добавить легкий алерт или просто оставить как есть
      });
      
      musicBtn.classList.add('active');
      musicBtn.classList.remove('inactive');
      icon.textContent = '🔇'; // Меняем иконку на "выключить"
    }
  });
</script>
});
