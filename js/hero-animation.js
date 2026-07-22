document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  const heroGuideImg = document.querySelector('.hero-guide img');

  if (heroContent) {
    heroContent.animate(
      [
        { opacity: 0, filter: 'blur(10px)' },
        { opacity: 1, filter: 'blur(0)' }
      ],
      {
        duration: 600,
        easing: 'ease',
        fill: 'forwards'
      }
    );
  }

  if (heroGuideImg) {
    heroGuideImg.animate(
      [
        { opacity: 0, transform: 'translate(-50%, 40px)' },
        { opacity: 1, transform: 'translate(-50%, 0)' }
      ],
      {
        duration: 600,
        easing: 'ease',
        fill: 'forwards'
      }
    );
  }
});
