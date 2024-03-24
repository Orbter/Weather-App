function calculatingBar(Aqi) {
  const bar = document.querySelector('.meter');
  const percentageLevel = Aqi / 3;
  bar.style.width = `${percentageLevel}%`;
}
export { calculatingBar };
