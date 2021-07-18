const weatherApi = {
    key: "14f98cbcb646776cc7ebf32ddb67961d",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let humid=document.getElementById("humidity");
    humid.innerHTML=`Humidity: ${(weather.main.humidity)} %`;

    let press=document.getElementById("pressure");
    press.innerHTML=`Pressure: ${(weather.main.pressure)} hPa`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://p2.piqsels.com/preview/455/422/361/sky-blue-clouds-nice-weather.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {
    
        document.body.style.backgroundImage = "url('https://i2.wp.com/scalawagmagazine.org/wp-content/uploads/2017/10/Feature-Photo-by-A.-H.-Jerriod-Avant-e1507560925958.jpg?fit=1200%2C675&ssl=1')";
        
    } else if(weatherType.textContent == 'Haze') {
    
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/12/02/17/47/fog-2993369_1280.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://www.maxpixel.net/static/photo/1x/Glass-Rain-Weather-Drop-Window-Light-Home-Wet-1489133.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_r70u1i7WgLh-S6PEro4tJCNoE4fyEh64VAK42g61FjfZGA5j9NptcYC78VVTGfgPKg&usqp=CAU')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Oc0kCcbLcnP_HvcMKTgKfQZhCwqGWtmcwA&usqp=CAU')";
        
    } else if(weatherType.textContent == 'Mist') {
        
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/08/29/21/24/mist-1629209_1280.jpg')";
    
    }
}

// Date manage
function dateManage(dateArg) {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    

    return `${date} ${month} ${year}`;
}