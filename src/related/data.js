const url = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=h8jWbKHF8xEC7OrmeJ4DjPXAyoLMVJVB';
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
export {getData};