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
        this.desc = desc;
        console.log(desc)
      });
 
  }
}