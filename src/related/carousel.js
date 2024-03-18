function moveSlides() {
  const track = document.querySelector('.carousel-tracker-continer');
  const slides = Array.from(track.children);
  const leftButton = document.querySelector('.carousel-button-left');
  const rightButton = document.querySelector('.carousel-button-right');
  const carouselNav = document.querySelector('.carousel-nav');
  const dots = Array.from(carouselNav.children);
  const slideWidth = slides[0].getBoundingClientRect().width;

  const setsSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };

  const moveToSlide = (tracking, currentSlide, targetSlide) => {
    tracking.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide-card');
    targetSlide.classList.add('current-slide-card');
  };
  const updateDots = (currentDot, targetDot) => {
    targetDot.classList.add('current-slide');
    currentDot.classList.remove('current-slide');
  };
  const updateButtons = (targetIndex, firstButton, secondButton, allSlides) => {
    if (targetIndex === 0) {
      firstButton.classList.add('is-hidden');
      secondButton.classList.remove('is-hidden');
    } else if (targetIndex === allSlides.length - 1) {
      secondButton.classList.add('is-hidden');
      firstButton.classList.remove('is-hidden');
    }
  };

  slides.forEach(setsSlidePosition);
  // move to the next slide
  rightButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide-card');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = carouselNav.querySelector('.current-slide');
    const dotColor = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, dotColor);
    updateButtons(nextIndex, leftButton, rightButton, slides);
  });
  leftButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide-card');
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = carouselNav.querySelector('.current-slide');
    const dotColor = currentDot.previousElementSibling;
    const previousIndex = slides.findIndex((slide) => slide === previousSlide);

    moveToSlide(track, currentSlide, previousSlide);
    updateDots(currentDot, dotColor);
    updateButtons(previousIndex, leftButton, rightButton, slides);
  });
  carouselNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('.carousel-indicator');
    if (!targetDot) return;
    const currentSlide = track.querySelector('.current-slide-card');
    const currentDot = carouselNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const dotColor = dots[targetIndex];

    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, dotColor);
    updateButtons(targetIndex, leftButton, rightButton, slides);
  });
}

export { moveSlides };