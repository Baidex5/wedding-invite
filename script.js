const playBtn = document.getElementById('play-music-btn');
const audio = document.getElementById('wedding-music');

// Ссылка на трек (лучше брать короткий loop или загружать свой в assets/)
audio.src = 'https://example.com/wedding-loop.mp3'; 

if (playBtn) {
  playBtn.addEventListener('click', () => {
    audio.play().catch(e => console.log('Автоплей заблокирован браузером', e));
    playBtn.style.display = 'none';
  });
}
