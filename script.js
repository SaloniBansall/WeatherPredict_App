const apikey="56e03e8567f84184ac1da3dbf00c3fb4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let weather=document.querySelector(".weather-icon");
let arr=["../rain.png","summer.png","winters.png"];
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
async function checkWeather(city){
    const response= await fetch(apiUrl+ city+`&appid=${apikey}`);
    var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/hr";
    if(Math.round(data.main.temp)<=10)
    weather.src=arr[2];
    else if(Math.round(data.main.temp)>10 && Math.round(data.main.temp)<=20)
    weather.src=arr[0];
    else
    weather.src=arr[1];

    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
