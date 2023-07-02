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



function formatDate(timestamp) {
  let date = new Date(timestamp*1000)
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
let day = days[date.getDay()]
return day

}
function formatDate (timestamp) {
  let date =new Date  (timestamp)
  let hours =date.getHours()
  let minutes = date.getMinutes()
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()]; 

  return` ${day} ${hours}:${minutes}`
  
}

function getWeather(response) {
  console.log(response);
  let cityInput = document.querySelector(".city-input");
  let weatherCondition = document.querySelector(".weather");
  let temp = document.querySelector(".temp");
  let humidityData = document.querySelector(".humidity-data");
  let windData = document.querySelector(".wind-data");
  let dateElement = document.querySelector(".date")
  let weatherImage = document.querySelector(".weather-image");
  weatherImage.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  ) 
 console.log(weatherImage);
  cityInput.innerHTML = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
  temp.innerHTML = Math.round(response.data.temperature.current);
  humidityData.innerHTML = response.data.temperature.humidity;
  windData.innerHTML = response.data.wind.speed;
  dateElement.innerHTML =formatDate(response.data.
time*1000) 
console.log(formatDate(response.data.time *1000));
console.log(response.data.time)
}
function searchWeather(event) {
  event.preventDefault();
  let textInput = document.querySelector("#text-input");
  let city = textInput.value;
  let apiKey = "f62d01b34c58e90t15caf7a143042b5o";
  let endPoint = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(endPoint).then(getWeather);
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", searchWeather);
console.log(searchForm);
// // function currentLocation(event) {
// //   event.preventDefault();
function currentLoc(position) {
  console.log(position.coords.latitude)
  let apiKey = "f62d01b34c58e90t15caf7a143042b5o";
   let endPoint = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(endPoint).then(getWeather);
    console.log(position.coords.latitude);

}
function  onLoadevent(event) {
  event.preventDefault();
   navigator.geolocation.getCurrentPosition(currentLoc);
}


// }
