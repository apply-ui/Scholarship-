const words = document.querySelectorAll('.word');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 1.3;
  words.forEach((word, index) => {
    const top = word.getBoundingClientRect().top;
    if (top < trigger && !word.classList.contains('visible')) {
      setTimeout(() => {
        word.classList.add('visible');
      }, index * 120);
    }
  });
});
