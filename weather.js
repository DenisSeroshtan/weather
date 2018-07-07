
class Weather {
  constructor(city) {
    this.apiKey = 'e5c6bf173ec1111ab3a29a910faa71c2';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}