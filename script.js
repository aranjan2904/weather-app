// api = https://api.openweathermap.org/data/2.5/weather?q={ranchi}&appid={API%20key}


const input = document.querySelector(".enterCity");

document.querySelector("button").addEventListener("click" , function (){
    
    const apiKey = "f72f15de20235c1d6adba715d6abdd03";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}`;
   
async function checkWeather (){
     const response = await fetch(apiUrl + `&appid=${apiKey}`);
     var data = await response.json();

     console.log(data);

     

     document.querySelector(".city").innerHTML = input.value;
     document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`
     document.querySelector(".humidity").innerHTML = data.main.humidity;
     document.querySelector(".wind").innerHTML = `${data.wind.speed} km/hr`;

     var weather_icon = document.querySelector(".weather_icon");
     var weatherType = document.querySelector(".weatherType");
     if(data.weather[0].main === "Clouds"){
           weather_icon.src = "/images/clouds.png" 
           weatherType.innerHTML = "cloudy"
     }else
     if(data.weather[0].main === "Clear"){
           weather_icon.src = "/images/clear.png" 
           weatherType.innerHTML = "Clear"
     }else
     if(data.weather[0].main === "Rain"){
           weather_icon.src = "/images/rain.png" 
           weatherType.innerHTML = "Rainy"
     }else
     if(data.weather[0].main === "Drizzle"){
           weather_icon.src = "/images/drizzle.png"
           weatherType.innerHTML = "Drizzle" 
     }else
     if(data.weather[0].main === "Mist"){
           weather_icon.src = "/images/mist.png" 
           weatherType.innerHTML = "Mist"
     }else
     if(data.weather[0].main === "Snow"){
           weather_icon.src = "/images/snow.png" 
           weatherType.innerHTML = "Snow"
     }
     

 }

checkWeather() 



});


 