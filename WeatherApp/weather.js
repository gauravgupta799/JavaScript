// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "51dad736e156096fd02f50de06220727 ",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}

//Get weather Report from

function getWeatherReport() {
    const city = document.getElementById('input-box').value;
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport); // calling showWeatherReport function

}

// //Show weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-Max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/
     ${Math.ceil(weather.main.temp_max)}$deg;C (max)`;

     let weatherType = document.getElementById('weather');
     weatherType.innerText =`${weather.weather[0].main}`;

     let date = document.getElementById('date');
     let todayDate = new Date();
     date.innerText = dateManage(todayDate);

    //  if(weatherType.textContent == 'clear'){
    //      document.body.style.backgroundImage = url(' image/clear.png');
    //  }else if(weatherType.textContent == 'clouds') {
    //     document.body.style.backgroundImage = url(' image/clouds.png');
    //  }
    //  else if(weatherType.textContent == 'rain') {
    //     document.body.style.backgroundImage = url(' image/rain.png');
    //  }
    //  else if(weatherType.textContent == 'Haze') {
    //     document.body.style.backgroundImage = url(' image/haze.png');
    //  }
    //  else if(weatherType.textContent == 'snow') {
    //     document.body.style.backgroundImage = url(' image/snow.png');
    //  }
}

//Date Manage

function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "november", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;

}



