import { getData } from './data';
import { createChart } from './graph';
import windGif from '../icons/wind.gif';
import { faviconGif } from './favicon';
import { calculatingBar } from './bar';

async function updatingUi(location) {
  // getting all the elements
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  const weatherNumber = document.querySelectorAll('.weather-number');
  const weatherText = document.querySelectorAll('.weather-name');
  const feelsLike = document.querySelectorAll('.feels-like');
  const humidity = document.querySelectorAll('.humidity');
  const chanceOfRain = document.querySelectorAll('.chance-of-rain');
  const weatherGif = document.querySelectorAll('.the-weather-gif');
  //
  const airSpeed = document.querySelectorAll('.air-speed');
  const airQuality = document.querySelectorAll('.air-quality-number');
  const airQualityName = document.querySelectorAll('.air-quality-name');
  const airGif = document.querySelectorAll('.wind-gif');
  //
  const Tomorrow = document.querySelectorAll('.weather-tomorrow-number');
  const TomorrowText = document.querySelectorAll('.weather-tomorrow-text');
  const TomorrowGif = document.querySelectorAll('.tomorrow-gif');
  const twoDays = document.querySelectorAll('.two-days');
  const twoDaysText = document.querySelectorAll('.two-days-text');
  const twoDayGif = document.querySelectorAll('.two-days-gif');
  const threeDays = document.querySelectorAll('.three-days');
  const threeDaysText = document.querySelectorAll('.three-days-text');
  const threeDaysGif = document.querySelectorAll('.three-days-gif');
  const fourDays = document.querySelectorAll('.four-days');
  const fourDaysText = document.querySelectorAll('.four-days-text');
  const fourDaysGif = document.querySelectorAll('.four-days-gif');
  const windAnimation = document.querySelectorAll('.wind-gif');

  const data = await getData(location);

  const todayTemp = Math.round(data.tempToday);
  const tomorrowTemp = Math.round(data.tomorrowTemp);
  const twoDaysTemp = Math.round(data.twoDatesTemp);
  const threeDaysTemp = Math.round(data.threeDaysTemp);
  const fourDaysTemp = Math.round(data.fourDaysTemp);
  const airDirection = airDirectionConvector(data.windDirection);
  city.innerText = data.city;
  country.innerText = data.country;
  everyItemUi(weatherNumber, todayTemp);
  everyItemUi(weatherText, data.condition);
  everyItemUi(feelsLike, `${data.feelsLike} C`);
  everyItemUi(humidity, `${data.humidity}%`);
  everyItemUi(chanceOfRain, `${data.rain}%`);
  everyItemUi(airSpeed, data.windSpeed);
  everyItemUi(airQuality, data.AQI);
  everyItemUi(Tomorrow, tomorrowTemp);
  everyItemUi(TomorrowText, data.conditionTomorrow);
  everyItemUi(twoDays, twoDaysTemp);
  everyItemUi(twoDaysText, data.conditionTwoDays);
  everyItemUi(threeDays, threeDaysTemp);
  everyItemUi(threeDaysText, data.conditionThreeDay);
  everyItemUi(fourDays, fourDaysTemp);
  everyItemUi(fourDaysText, data.conditionFourDays);
  windAnimation.forEach((item) => {
    item.src = windGif;
  });
  // weatherNumber.innerText = todayTemp;
  //weatherText.innerText = data.condition;
  //feelsLike.innerText = `${data.feelsLike}%`;
  //humidity.innerText = `${data.humidity}%`;
  //chanceOfRain.innerText = `${data.rain}%`;
  //airSpeed.innerText = data.windSpeed;
  //airQuality.innerText = data.AQI;
  //airQualityName.innerText = airDirection;
  //Tomorrow.innerText = tomorrowTemp;
  //TomorrowText.innerText = data.conditionTomorrow;
  //twoDays.innerText = twoDaysTemp;
  //twoDaysText.innerText = data.conditionTwoDays;
  //threeDays.innerText = threeDaysTemp;
  //threeDaysText.innerText = data.conditionThreeDay;
  //fourDays.innerText = fourDaysTemp;
  //fourDaysText.innerText = data.conditionFourDays;

  // Gif
  airGif.src = windGif;
  faviconGif(data.condition, weatherGif);
  faviconGif(data.conditionTomorrow, TomorrowGif);
  faviconGif(data.conditionTwoDays, twoDayGif);
  faviconGif(data.conditionThreeDay, threeDaysGif);
  faviconGif(data.conditionFourDays, fourDaysGif);

  // wind gif
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
function everyItemUi(array, apiData) {
  const text = apiData;
  array.forEach((item) => {
    item.innerText = text;
  });
}

export { updatingUi };
