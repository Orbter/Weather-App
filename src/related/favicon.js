import cloudyNight from '../icons/cloudy-night.gif';
import cloudy from '../icons/cloudy.gif';
import night from '../icons/night.gif';
import patchyRain from '../icons/patchy-rain.gif';
import rain from '../icons/rain.gif';
import snow from '../icons/snow.gif';
import sun from '../icons/sun.gif';
import mist from '../icons/mist.gif';
import partlyCloudy from '../icons/partly-cloudy.gif';
import patchySnow from '../icons/patchy-snow.gif';
import heavyRain from '../icons/heavy-rain.gif';
import fog from '../icons/foggy.gif';
import ice from '../icons/icicles.gif';
import drizzle from '../icons/drop.gif';
import house from '../icons/house.gif';

function faviconGif(weather, place) {
  let src;

  const now = new Date();
  const hour = now.getHours();
  if (weather.trim() === 'Sunny') {
    src = sun;
  } else if (weather.trim() === 'Clear') {
    src = night;
  } else if (weather.trim() === 'Partly Cloudy') {
    if (hour >= 18 || hour < 6) {
      src = cloudyNight;
    } else {
      src = partlyCloudy;
    }
  } else if (weather.trim() === 'Cloudy') {
    src = cloudy;
  } else if (weather.trim() === 'Mist') {
    src = mist;
  } else if (weather.trim() === 'Patchy rain nearby') {
    src = patchyRain;
  } else if (weather.trim() === 'Patchy snow nearby') {
    src = patchySnow;
  } else if (
    weather === 'Thundery outbreaks in nearby' ||
    weather === 'Heavy rain'
  ) {
    src = heavyRain;
  } else if (weather.trim() === 'Blizzard' || weather.includes('snow')) {
    src = snow;
  } else if (weather.includes('rain')) {
    src = rain;
  } else if (weather.trim() === 'Fog') {
    src = fog;
  } else if (weather.includes('ice')) {
    src = ice;
  } else if (weather.includes('drizzle')) {
    src = drizzle;
  } else {
    src = house;
  }
  place.forEach((img) => (img.src = src));
}

export { faviconGif };
