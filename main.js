let Weather = {
  "apikey": "ccbee0f046cde04d99db1a20a3630353",
  fetchWeather: function(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey).then((Response) => Response.json())
      .then((data) => this.displayWeather(data))
  },
  displayWeather: function(data) {
const {name} = data;
const {icon, description} = data.weather[0];
const {temp, humidity} = data.main;
const {speed} = data.wind;
  document.querySelector('.city').innerText = 'weather in' + " " +name;
  document.querySelector('.icon').src ='https://openweathermap.org/img/wn' + icon + '.png';
  document.querySelector('.description').innerText = description;
  document.querySelector('.temp').innerText = temp + '°C';
  document.querySelector('.humidity').innerText = 'Humidity:' +" " +humidity + '%';
  document.querySelector('.wind').innerText = 'wind speed:' +" " +speed + "km/h";
  document.querySelector('.Weather').classList.remove('loading');
 document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900?" + name +")";
}, 
search: function(){
  this.fetchWeather(document.querySelector('.search-bar').value)
}
};
document.querySelector('.search button').addEventListener('click', ()=>{
  Weather.search()
})
document.querySelector('.search-bar').addEventListener('keyup', (event)=>{
  if(event.key === "Enter"){
    Weather.search()
  }
})

Weather.fetchWeather('Lagos');
