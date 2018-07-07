class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Екатеринбург'
  }

  setLocationData() {

    if(!localStorage.getItem('city')) {
      this.city = this.defaultCity
    } else {
      this.city = localStorage.getItem('city');
    }

    return this.city;
  }

  getLocationData(city) {
    localStorage.setItem('city', city)
  }
}