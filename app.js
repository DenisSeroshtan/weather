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

function getDirectionWind(deg) {
  let deg = +deg;
  let direction;

  if(deg >= 340 && deg <= 360 || deg >= 0 && deg <= 20) direction = 'с'
  else if(deg > 20 && deg <=70 ) direction = 'с-в'
  else if(deg > 70 && deg <=110) direction = 'в'
  else if(deg > 110 && deg <= 160) direction = 'ю-в'
  else if (deg > 160 && deg <= 200) direction = 'ю'
  else if (deg > 200 && deg <= 250) direction = 'ю-з'
  else if (deg > 250 && deg <= 290) direction = 'з'
  else if (deg > 290 && deg <= 340 ) direction = 'с-з'
  else direction = 'deg'

  return direction;
}

const translate = new Translate ('hello world');

translate.getTranslate()
  .then(data => {
    console.log(data)
  })
