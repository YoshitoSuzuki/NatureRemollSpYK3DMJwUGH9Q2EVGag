// スクロールするとclassを追加
window.addEventListener('scroll', function() {
  const formattedDate = document.getElementById('formattedDate');
  const timeSec = document.getElementById('time');
  const scrollThreshold = 100; // スクロールのしきい値

  if (window.scrollY > scrollThreshold) {
    formattedDate.classList.add('scrolleddate');
    formattedDate.classList.add('scrolled');
    timeSec.classList.add('scrolled');
    timeSec.classList.add('scrolledtime');
  } else {
    formattedDate.classList.remove('scrolleddate');
    formattedDate.classList.remove('scrolled');
    timeSec.classList.remove('scrolled');
    timeSec.classList.remove('scrolledtime');
  }
});
