const weather = new Weather('москва');

// weather.getWeather()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err))


// < img src = "http://openweathermap.org/img/w/03d.png" >

function getTime(timeUTC) {
  const date = new Date(timeUTC * 1000);
 
  const hours = date.getHours();
  
  const minutes = "0" + date.getMinutes();
  
  const seconds = "0" + date.getSeconds();

  const formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

  return formattedTime;
}

console.log(getTime(1530924944))
console.log(getTime(1530987151))