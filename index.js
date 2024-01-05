document.addEventListener("DOMContentLoaded",()=>{
    const cityInput = document.getElementById("cityInput");
    const apiKey="3fa1061ad94f010fc7b8a82562e6b32c";
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const weatherInfo = document.getElementById("weatherInfo");
    const weatherCity= weatherInfo.querySelector('h2');
    const weatherDescription=weatherInfo.querySelector('p');

    getWeatherBtn.addEventListener("click",()=>{
        const city= cityInput.ariaValueMax.trim();
        if(city!==""){
            getWeather(city);
            cityInput.value="";
        }
    })

    getWeather(city){
      const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    }
})