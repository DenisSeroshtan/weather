
const storage = new Storage;
const weather = new Weather;
const ui = new UI;

window.addEventListener("DOMContentLoaded", getWeather);
document.getElementById('w-change-btn').addEventListener('click', setNewLocation)

function getWeather() {

  weather.getWeather(storage.setLocationData())
    .then(data => {

      ui.paint(data)
    })
    .catch(err => {
      console.log(err);
      localStorage.clear();
      window.getWeather();
    })
}


function setNewLocation(e) {
  e.preventDefault();
  
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  window.getWeather();

  storage.getLocationData(city);

  $('#locModal').modal('hide');

}


