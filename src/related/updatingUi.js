import { getData } from './data';
import { createChart } from './graph';
import windGif from '../icons/wind.gif';
import { faviconGif } from './favicon';
import { calculatingBar } from './bar';

async function updatingUi(location) {
  // getting all the elements
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  const weatherNumber = document.querySelector('.weather-number');
  const weatherText = document.querySelector('.weather-name');
  const feelsLike = document.querySelector('.feels-like');
  const humidity = document.querySelector('.humidity');
  const chanceOfRain = document.querySelector('.chance-of-rain');
  const weatherGif = document.querySelector('.the-weather-gif');
  //
  const airSpeed = document.querySelector('.air-speed');
  const airQuality = document.querySelector('.air-quality-number');
  const airQualityName = document.querySelector('.air-quality-name');
  const airGif = document.querySelector('.wind-gif');
  //
  const Tomorrow = document.querySelector('.weather-tomorrow-number');
  const TomorrowText = document.querySelector('.weather-tomorrow-text');
  const TomorrowGif = document.querySelector('.tomorrow-gif');
  const twoDays = document.querySelector('.two-days');
  const twoDaysText = document.querySelector('.two-days-text');
  const twoDayGif = document.querySelector('.two-days-gif');
  const threeDays = document.querySelector('.three-days');
  const threeDaysText = document.querySelector('.three-days-text');
  const threeDaysGif = document.querySelector('.three-days-gif');
  const fourDays = document.querySelector('.four-days');
  const fourDaysText = document.querySelector('.four-days-text');
  const fourDaysGif = document.querySelector('.four-days-gif');

  const data = await getData(location);

  const todayTemp = Math.round(data.tempToday);
  const tomorrowTemp = Math.round(data.tomorrowTemp);
  const twoDaysTemp = Math.round(data.twoDatesTemp);
  const threeDaysTemp = Math.round(data.threeDaysTemp);
  const fourDaysTemp = Math.round(data.fourDaysTemp);
  const airDirection = airDirectionConvector(data.windDirection);
  city.innerText = data.city;
  country.innerText = data.country;
  weatherNumber.innerText = todayTemp;
  weatherText.innerText = data.condition;
  feelsLike.innerText = `${data.feelsLike}%`;
  humidity.innerText = `${data.humidity}%`;
  chanceOfRain.innerText = `${data.rain}%`;
  airSpeed.innerText = data.windSpeed;
  airQuality.innerText = data.AQI;
  airQualityName.innerText = airDirection;
  Tomorrow.innerText = tomorrowTemp;
  TomorrowText.innerText = data.conditionTomorrow;
  twoDays.innerText = twoDaysTemp;
  twoDaysText.innerText = data.conditionTwoDays;
  threeDays.innerText = threeDaysTemp;
  threeDaysText.innerText = data.conditionThreeDay;
  fourDays.innerText = fourDaysTemp;
  fourDaysText.innerText = data.conditionFourDays;

  // Gif
  airGif.src = windGif;
  faviconGif(data.condition, weatherGif);
  faviconGif(data.conditionTomorrow, TomorrowGif);
  faviconGif(data.conditionTwoDays, twoDayGif);
  faviconGif(data.conditionThreeDay, threeDaysGif);
  faviconGif(data.conditionFourDays, fourDaysGif);

  calculatingBar(data.AQI);
  const hourly = data.hourTemp;
  await createChart(hourly);
}

const airDirectionConvector = (letters) => {
  let direction = 'error';
  if (letters === 'N') {
    direction = 'North';
  } else if (letters === 'NNE') {
    direction = 'North Northeast';
  } else if (letters === 'NE') {
    direction = 'Northeast';
  } else if (letters === 'ENE') {
    direction = 'East Northeast';
  } else if (letters === 'E') {
    direction = 'East';
  } else if (letters === 'ESE') {
    direction = 'East Southeast';
  } else if (letters === 'SE') {
    direction = 'Southeast';
  } else if (letters === 'SSE') {
    direction = 'South Southeast';
  } else if (letters === 'S') {
    direction = 'South';
  } else if (letters === 'SSW') {
    direction = 'South Southwest';
  } else if (letters === 'SW') {
    direction = 'Southwest';
  } else if (letters === 'WSW') {
    direction = 'West Southwest';
  } else if (letters === 'W') {
    direction = 'West';
  } else if (letters === 'WNW') {
    direction = 'West Northwest';
  } else if (letters === 'NW') {
    direction = 'Northwest';
  } else if (letters === 'NNW') {
    direction = 'North Northwest';
  }
  return direction;
};

export { updatingUi };
