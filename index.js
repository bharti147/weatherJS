document.addEventListener("DOMContentLoaded",()=>{
    const cityInput = document.getElementById("cityInput");
    const apiKey="ddb60c60493386bfe579d47f9d3bf075";
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const weatherInfo = document.getElementById("weatherInfo");
    const weatherCity= weatherInfo.querySelector('h2');
    const weatherDescription=weatherInfo.querySelector('p');

   
    getWeatherBtn.addEventListener("click",()=>{
        const city= cityInput.value.trim();
        if(city!==""){
            getWeather(city);
            cityInput.value="";
        }
    })
    async function getWeather(city){
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try{
      const response=await fetch(url);
      if(!response.ok){
          throw new Error(`Network resonse was not ok: ${response.statusText}`)
      }
      const data=await response.json();
      showWeather(data);
      console.log("data from the api: ",data);
  }
  catch(error){
  console.log('Errors fetching data:',error);
  }
      }

    //   function showWeather(data) {
    //     const cityName = data.name;
    //     const weatherDescription = data.weather[0].description;
    //     const temperature = data.main.temp;
    
    //     weatherCity.textContent = cityName;
    //     weatherInfo.style.display = "block";
    //     weatherDescription.textContent = `Weather: ${weatherDescription}, Temperature: ${temperature}°C`;
    //   }

      function showWeather(data){
        const cityName=data.name;
        const weatherDes=data.weather[0].main;
        const temperature = data.main.temp;
        weatherCity.textContent=cityName;
        weatherInfo.style.display = "block";
        weatherDescription.textContent=`Weather:${weatherDes},Temperature: ${temperature}°C`;
      }
   
  
})