async function getData(location) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=e377a3a891a747e991e212521242003&q=${location}&days=5&aqi=yes&alerts=no`;

  // fetching the urls
  const response = await fetch(url);

  // all the data
  const data = await response.json();

  const city = data.location.name;
  const country = data.location.country;
  const tempToday = data.current.temp_c;
  const feelsLike = data.current.feelslike_c;
  const humidity = data.current;

  const forecastDay = data.forecast.forecastday[0];

  const forecastTomorrow = data.forecast.forecastday[1];
  const forecastTwoDays = data.forecast.forecastday[2];
  const forecastThreeDays = data.forecast.forecastday[3];
  const forecastFourDays = data.forecast.forecastday[4];
  // temp for the future
  const tomorrowTemp = forecastTomorrow.day.avgtemp_c;
  const twoDatesTemp = forecastTwoDays.day.avgtemp_c;
  const threeDaysTemp = forecastThreeDays.day.avgtemp_c;
  const fourDaysTemp = forecastFourDays.day.avgtemp_c;
  // all dates text
  const condition = forecastDay.day.condition.text;
  const conditionTomorrow = forecastTomorrow.day.condition.text;
  const conditionTwoDays = forecastTwoDays.day.condition.text;
  const conditionThreeDay = forecastThreeDays.day.condition.text;
  const conditionFourDays = forecastFourDays.day.condition.text;

  const rain = forecastDay.day.daily_chance_of_rain;

  // hour temperature
  const hourTemp = forecastDay.hour;

  // wind
  const windSpeed = data.current.wind_kph;
  const windDirection = data.current.wind_dir;
  const airQuality = data.current.air_quality.pm2_5;
  const AQI = calculatePM25AQI(airQuality);
  return {
    city,
    country,
    tempToday,
    feelsLike,
    humidity,
    tomorrowTemp,
    twoDatesTemp,
    threeDaysTemp,
    fourDaysTemp,
    condition,
    conditionTomorrow,
    conditionTwoDays,
    conditionThreeDay,
    conditionFourDays,
    rain,
    windSpeed,
    windDirection,
    hourTemp,
    AQI,
    // AQI, // Uncomment if AQI calculation is implemented
  };
}
function calculatePM25AQI(concentration) {
  // Define the breakpoints for PM2.5 concentration and their corresponding AQI values
  const breakpoints = [
    {
      lowConc: 0.0,
      highConc: 12.0,
      lowAQI: 0,
      highAQI: 50,
    },
    {
      lowConc: 12.1,
      highConc: 35.4,
      lowAQI: 51,
      highAQI: 100,
    },
    {
      lowConc: 35.5,
      highConc: 55.4,
      lowAQI: 101,
      highAQI: 150,
    },
    {
      lowConc: 55.5,
      highConc: 150.4,
      lowAQI: 151,
      highAQI: 200,
    },
    {
      lowConc: 150.5,
      highConc: 250.4,
      lowAQI: 201,
      highAQI: 300,
    },
    {
      lowConc: 250.5,
      highConc: 350.4,
      lowAQI: 301,
      highAQI: 400,
    },
    {
      lowConc: 350.5,
      highConc: 500.4,
      lowAQI: 401,
      highAQI: 500,
    },
  ];

  // Find the correct breakpoint
  const breakpoint = breakpoints.find(
    (b) => concentration >= b.lowConc && concentration <= b.highConc
  );

  if (!breakpoint) {
    throw new Error('Concentration out of range');
  }

  // Apply the AQI calculation formula
  const AQI =
    ((breakpoint.highAQI - breakpoint.lowAQI) /
      (breakpoint.highConc - breakpoint.lowConc)) *
      (concentration - breakpoint.lowConc) +
    breakpoint.lowAQI;

  return Math.round(AQI); // Round the result to the nearest whole number
}

// Example usage

export { getData };
