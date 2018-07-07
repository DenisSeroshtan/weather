const weather = new Weather('москва');
const translate = new Translate();
const ui = new UI();

weather.getWeather()
  .then(data => {
    ui.paint(data)
  })
  .catch(err => console.log(err))


