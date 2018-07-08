
const storage = new Storage;
const weather = new Weather(storage.setLocationData());
const ui = new UI;
// прелоадер
window.addEventListener('load', function() {
  document.getElementById('animation').style.left = '-9999em';
})
// загрузка данных по API
window.addEventListener("DOMContentLoaded", getWeather);
// смена локации
document.getElementById('w-change-btn').addEventListener('click', setNewLocation)

function getWeather() {
  weather.getWeather()
    .then(data => {
      ui.paint(data);
    })
    .catch(err => {
      console.log(err);
      localStorage.clear();
      alert('что-то пошло не так, подробности в консоли..'); 
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
