function moveSlides() {
  const track = document.querySelector('.carousel-tracker-continer');
  const slides = Array.from(track.children);
  const leftButton = document.querySelector('.carousel-button-left');
  const rightButton = document.querySelector('.carousel-button-right');
  const carouselNav = document.querySelector('.carousel-nav');
  const dots = Array.from(carouselNav.children);
  let slideWidth = slides[0].getBoundingClientRect().width;

  const setsSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };

  window.addEventListener('resize', () => {
    const trackerContainer = document.querySelector(
      '.carousel-tracker-continer'
    );
    trackerContainer.classList.add('no-transition');
    // Recalculate slide width
    slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach(setsSlidePosition);
    const currentSlideIndex = slides.findIndex((slide) =>
      slide.classList.contains('current-slide-card')
    );
    if (currentSlideIndex >= 0) {
      const newTranslateX = slideWidth * currentSlideIndex;
      // Adjust the track's transform property to align with the new slide positions
      track.style.transform = `translateX(-${newTranslateX}px)`;
    }
    clearTimeout(window.resizingFinished);
    window.resizingFinished = setTimeout(() => {
      trackerContainer.classList.remove('no-transition');
    }, 250); // Adjust timeout duration as needed
    // Potentially move to the current slide again to adjust positioning
  });

  const moveToSlide = (tracking, currentSlide, targetSlide) => {
    tracking.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide-card');
    targetSlide.classList.add('current-slide-card');
    console.log(slideWidth);
  };
  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
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
