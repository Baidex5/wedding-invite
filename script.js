document.getElementById('rsvp-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Спасибо! Ваше подтверждение получено.');
  e.target.reset();
  <script>
  const musicBtn = document.getElementById('music-toggle');
  const audio = document.getElementById('wedding-music');
  const icon = musicBtn.querySelector('.icon');
  const text = musicBtn.querySelector('.text');

  musicBtn.addEventListener('click', () => {
    const isPlaying = !audio.paused;

    if (isPlaying) {
      // Если играет -> ставим на паузу
      audio.pause();
      musicBtn.classList.remove('active');
      text.textContent = 'Музыка';
      icon.textContent = '🎵';
    } else {
      // Если пауза -> пробуем запустить
      audio.play().catch(error => {
        console.log('Автовоспроизведение заблокировано браузером. Нужно взаимодействие пользователя.');
        alert('Пожалуйста, нажмите на кнопку еще раз, чтобы включить музыку.');
      });
      
      musicBtn.classList.add('active');
      text.textContent = 'Выключить';
      icon.textContent = '🔇';
    }
  });
</script>
});
