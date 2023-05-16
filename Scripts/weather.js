const weatherApi = {};

weatherApi.init = () => {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=56.453627&longitude=9.412491&current_weather=true&forecast_days=1"
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const currentWeather = data.current_weather;
      console.log(currentWeather);
      console.log(currentWeather.temperature);
      console.log(currentWeather.windspeed);

      const temp = document.querySelector(".weatherApi");
      temp.innerHTML =
        `<div><img src="./img/Weather Sun Icon.svg"></div>` +
        `<hr>` +
        `<div class="weatherContainer">` +
        `<div class="currentTemperatur">${currentWeather.temperature} °C</div>` +
        `<div class="windSpeed">${currentWeather.windspeed} m/s</div>` +
        `</div>`;
    })

    .catch((error) => console.log(error));
};

export default weatherApi;
