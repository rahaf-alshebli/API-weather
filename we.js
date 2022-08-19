feather.replace();
const city = document.querySelector("#city");
const cityName = document.querySelector(".location");
const Temp = document.querySelector(".weather-temp");
const main = document.querySelector("#main");
const discription = document.querySelector(".weather-desc");
const h=document.getElementById("HUMIDITY");
const p=document.getElementById("pressure")
const input = document.querySelector("#city");
const w=document.getElementById("WIND");
const day=document.querySelector(".date-dayname")
const date=document.querySelector(".date-day")
const d=new Date().toLocaleDateString;

input.onchange = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

weatherUpdate = (city) => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f031ccafb27cb66dcd178c6209aa9d59`);

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      console.log(data)
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}Â°C`;
    
      discription.innerHTML = data.weather[0].description;
      p.innerHTML=data.main.pressure+" psi"
      w.innerHTML=data.wind.speed+" km/h"
      h.innerHTML=data.main.humidity+"%"
      day.innerHTML= new Date().toLocaleDateString('en-us', { weekday:"long"});
      

      date.innerHTML=new Date().toLocaleDateString('en-gb');

   
    }
  };
};

weatherUpdate("patna");