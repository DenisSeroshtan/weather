class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.temp = document.getElementById('w-temp');
    this.desc = document.getElementById('w-desc');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');

  }

  static getDirectionWind(deg) {
    deg = +deg;
    let direction;

    if (deg >= 340 && deg <= 360 || deg >= 0 && deg <= 20) direction = 'с'
    else if (deg > 20 && deg <= 70) direction = 'с-в'
    else if (deg > 70 && deg <= 110) direction = 'в'
    else if (deg > 110 && deg <= 160) direction = 'ю-в'
    else if (deg > 160 && deg <= 200) direction = 'ю'
    else if (deg > 200 && deg <= 250) direction = 'ю-з'
    else if (deg > 250 && deg <= 290) direction = 'з'
    else if (deg > 290 && deg <= 340) direction = 'с-з'
    else direction = 'deg'

    return direction;
  }

  static getTime(timeUTC) {
    const date = new Date(timeUTC * 1000);

    const hours = date.getHours();

    const minutes = "0" + date.getMinutes();

    const seconds = "0" + date.getSeconds();

    const formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

    return formattedTime;
  }

  paint(weather) {

    const translate = new Translate();

    let city = weather.name;
    let desc = weather.weather[0].description;

    let string = `${city}, ${desc}`;

    translate.getTranslate(string)
      .then(data => {
        city = data.text[0].split(', ')[0];
        desc = data.text[0].split(', ')[1];

        this.location.textContent = city;
        this.desc.textContent = desc;
      })
      .catch(err => {
        console.log(err);
        console.log('Что-то не так с переводчиком...');

        this.location.textContent = city;
        this.desc.textContent = desc;
      });


    this.temp.textContent = Math.floor(+(weather.main.temp) - 273) + " ℃";

    this.humidity.textContent = `влажность возд. ${weather.main.humidity} %`;
    this.pressure.textContent = parseFloat(Math.floor(weather.main.pressure * 0.75)) + ' мм.рт.cт';

    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);

    this.wind.textContent = `ветер ${weather.wind.speed} м/с, напр. ${UI.getDirectionWind(weather.wind.deg)}`;
    
    this.sunrise.textContent = `восход ${UI.getTime(weather.sys.sunrise)}`;

    this.sunset.textContent = `закат ${UI.getTime(weather.sys.sunset)}`;
  }
}