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

todaysday.innerHTML = `${day}  ${hour}:${time}`;

// function searchCountry(response, event) {
//   event.preventDefault();
//   console.log(response)
//   let search = document.querySelector(".input-text");
//   let country = document.querySelector(".country");
//   country.innerHTML = `${search.value}`
//   ;
//   let apiKey = "b9ba0314a93083136d968577c718e31d";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&=metric
//   `
//   console.log(apiUrl)
//   axios.get(apiUrl).then(searchCountry)
// }
function showWeather(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${temperature}℃`;
  let weatherDes = document.querySelector(".weather");
  weatherDes.innerHTML = response.data.weather[0].description;

  let search = document.querySelector(".input-text");
  let country = document.querySelector(".country");
  country.innerHTML = search.value;
  console.log(response.data.weather[0].description);
}
// let country =document.quySelector(".country")
let weatherForm = document.querySelector(".weather-form");
weatherForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let search = document.querySelector(".input-text");
  let country = document.querySelector(".country");
  console.log(country);
  // let searchValue = search.value;
  country = search.value;
  let apiKey = "b9ba0314a93083136d968577c718e31d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
});
function currentLoc(position) {
  console.log(position);
  let apiKey = "b9ba0314a93083136d968577c718e31d";
  let endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(position);
  axios.get(endPoint).then(showWeather);
}
function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLoc);
}

let current = document.querySelector(".current");
current.addEventListener("click", currentLocation);

// function currentWeather(event) {
//   let currentBtn =

// }
