let today = new Date();
// console.log(today);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];
// console.log(day);
let todaysday = document.querySelector(".date");
//  todaysday.innerHTML=day
let hour = today.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
//  let hours = document.querySelector("#hours")
//  hours.innerHTML=hour
// console.log(hour);

// console.log(hour);
let time = today.getMinutes();
if (time < 10) {
  time = `0${time}`;
}
// console.log(time);

// todaysday.innerHTML = `${day}  ${hour}:${time}`;

function getWeather(response) {
  console.log(response);
  let cityInput = document.querySelector(".city-input");
  let weatherCondition = document.querySelector(".weather");
  let temp = document.querySelector(".temp")
  let humidityData = document.querySelector(".humidity-data");
  cityInput.innerHTML = response.data.city;
   weatherCondition .innerHTML= response. data.condition.description
   temp.innerHTML =  Math.round(response.data. temperature.current)
  humidityData.innerHTML = response.data.temperature.humidity;
}
function searchWeather(event) {
event.preventDefault()
let textInput = document.querySelector("#text-input");
let city = textInput.value
let apiKey = "f62d01b34c58e90t15caf7a143042b5o";
let endPoint =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

   axios.get(endPoint).then(getWeather)
}


 let searchForm = document.querySelector(".search-form");
 searchForm.addEventListener("submit", searchWeather)
 console.log(searchForm)
// function currentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(currentLoc);
// }

