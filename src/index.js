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
 function formatDailyDate (timestamp){
let date = new Date(timestamp*1000)
let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let day =days[date.getDay()]
return day
// console.log(formatDailyDate(day));

}

function displayDaily(response) {
  let dailyForcast = document.querySelector(".daily-forcast");
  let forcast = `<div class="row">
`; let dailyTemp = response.data.daily
console.log(dailyTemp[0].condition);
// let days = ["Sun", "Mon", "Tue", "W"]
dailyTemp.forEach(function ( dailyTempDay, index) {
  if (index < 5) {
  forcast =
    forcast +
    `
      <div class="col-2">
        <p class="text-center">${formatDailyDate(dailyTempDay.time)}</p>
        <div class="icon-container">
          <img
            // src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${dailyTemp[0].condition.icon}.png"
            class="m"
            alt="weather-Image"
            srcset=""
            width="55"
          />
        </div>
      </div>

  `;
  }
});
    forcast = forcast + `</div>`;
    dailyForcast.innerHTML = forcast;
    console.log(response)

}


function getCoordinates(coordinates){
  let lon = coordinates.longitude
  let lat = coordinates.latitude;
  let apiKeys = "f62d01b34c58e90t15caf7a143042b5o";
  let url =`https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKeys}&units=metric`;
  console.log(url)
  axios.get(url).then(displayDaily)

}

function getWeather(response) {
  console.log(response);
  let cityInput = document.querySelector(".city-input");
  let weatherCondition = document.querySelector(".weather");
  let temp = document.querySelector(".temp");
  let humidityData = document.querySelector(".humidity-data");
  let windData = document.querySelector(".wind-data");
  let dateElement = document.querySelector(".date");
  let weatherImage = document.querySelector(".weather-image");
  weatherImage.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  console.log(weatherImage);
  cityInput.innerHTML = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
  temp.innerHTML = Math.round(response.data.temperature.current);
  humidityData.innerHTML = response.data.temperature.humidity;
  windData.innerHTML = response.data.wind.speed;
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  celsuisTemp = response.data.temperature.current;
  console.log(formatDate(response.data.time * 1000));
  console.log(response.data.time);
  getCoordinates(response.data.coordinates)
  console.log(response.data.coordinates.longitude);
}
function searchCity(city) {
  let apiKey = "f62d01b34c58e90t15caf7a143042b5o";
  // let cityInput = document.querySelector(".city-input");
  let endPoint = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(endPoint).then(getWeather);
  // console.log(cityInput);
}
function searchWeather(event) {
  event.preventDefault();
  let textInput = document.querySelector("#text-input");
  searchCity(textInput.value); 

  // console.log(city)
  // let apiKey = "f62d01b34c58e90t15caf7a143042b5o";
  // let endPoint = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  // axios.get(endPoint).then(getWeather);
}
function getCelsius(event) {
 event.preventDefault();
    let temp = document.querySelector(".temp");
  temp.innerHTML = Math.round(celsuisTemp);
}
function getFahrenheit(event) {
  event.preventDefault()
    let temp = document.querySelector(".temp");
    let fahrenheitTemp = (celsuisTemp * 9) / 5 + 32;
  temp .innerHTML =  Math.round (fahrenheitTemp)
}
let  celsuisTemp =null

let fahrenheitLink = document.querySelector(".fahrenheit-link");
 let celsiusLink = document.querySelector(".celsius-link")
 celsiusLink .addEventListener("click", getCelsius)
fahrenheitLink.addEventListener("click", getFahrenheit)


let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", searchWeather);
console.log(searchForm);

searchCity("Mushin")