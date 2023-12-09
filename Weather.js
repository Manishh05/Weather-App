const apikey = "1b2255be5aec59f884646e750d2e97dc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".Search input");
const SearchBtn = document.querySelector(".Search button");



 async function checkWeather(city){
    const response  = await fetch(apiUrl + city + `&appid=${apikey}`)
    let data = await response.json();

    console.log(data)
    
    document.querySelector(".city").innerHTML = "Weather in "+ data.name;
    document.querySelector(".temp").innerHTML = "Temprature :" + Math.round(data.main.temp) + "°C";
    document.querySelector(".description").innerHTML = "It's too  " +  data.weather[0].description ;
    document.querySelector(".humidity").innerHTML = "Humidity :"+ data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "Speed :" +data.wind.speed + "km/hr";
    document.querySelector(".icon").src =  "https://openweathermap.org/img/wn/"+ data.weather[0].icon +".png"
  


}

SearchBtn.addEventListener("click", ()=>{
    checkWeather(SearchBox.value);
});

 

