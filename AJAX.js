var city = 'LVIV';
var apiKey = '5d066958a60d315387d9492393935c19';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;


var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

        var response = JSON.parse(xhr.responseText);


        var temperature = response.main.temp;
        var pressure = response.main.pressure;
        var description = response.weather[0].description;
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;
        var windDirection = response.wind.deg;
        var iconCode = response.weather[0].icon;


        console.log('Temperature:', temperature);
        console.log('Pressure:', pressure);
        console.log('Description:', description);
        console.log('Humidity:', humidity);
        console.log('Wind Speed:', windSpeed);
        console.log('Wind Direction:', windDirection);


        var iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        console.log('Icon:', iconUrl);
    }
};
xhr.send();