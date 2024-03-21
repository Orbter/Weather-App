import { getData } from './data';

function updatingUi() {
  // getting all the elements
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  const weatherNumber = document.querySelector('.weather-tomorrow-number');
  const weatherText = document.querySelector('.weather-name');
  const feelsLike = document.querySelector('.feels-like');
  const humidity = document.querySelector('.humidity');
  const chanceOfRain = document.querySelector('.chance-of-rain');
  //
  const airSpeed = document.querySelector('.air-speed');
  const airQuality = document.querySelector('.air-quality-number');
  const airQualityName = document.querySelector('.air-quality-name');
  //
  const Tomorrow = document.querySelector('.weather-tomorrow-number');
  const TomorrowText = document.querySelector('.weather-tomorrow-text');
  const twoDays = document.querySelector('.two-days');
  const twoDaysText = document.querySelector('.two-days-text');
  const threeDays = document.querySelector('.three-days');
  const threeDaysText = document.querySelector('.three-days-text');
  const fourDays = document.querySelector('.four-days');
  const fourDaysText = document.querySelector('.four-days-text');
}
