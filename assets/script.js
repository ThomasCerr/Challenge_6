// Click Listener that activates 2  three functions:
// (1) City, Temp, Humidity, UV Index in main box
// (2) 5 Day forecast - Temp, Wind, Humidity in 2nd box
// (3) Creates a recent search history div of what was inputted, and saved to local storag

//Miscellaneaous Variables
 var searchInput = document.getElementById('search-weather');
 var key= '6ba32263f12394fd4bdedac009a4a7b3';
 var btn= document.getElementById('.btn')
 

//Current Forecast Variables
const mainDate = document.querySelector('.mainDate');
const mainTemp = document.querySelector('.mainTemp');
const mainHumidity = document.querySelector('.mainHumidity');
const mainUVIndex = document.querySelector('.mainUVIndex');
const mainWind = document.querySelector('.mainWind');

//5 Day Forecast Variables
const forecastDate1 = document.querySelector('.date1');
const forecastDate2 = document.querySelector('.date2');
const forecastDate3 = document.querySelector('.date3');
const forecastDate4 = document.querySelector('.date4');
const forecastDate5 = document.querySelector('.date5');

const forecastTemp1 = document.querySelector('.temp1');
const forecastTemp2 = document.querySelector('.temp2');
const forecastTemp3 = document.querySelector('.temp3');
const forecastTemp4 = document.querySelector('.temp4');
const forecastTemp5 = document.querySelector('.temp5');

const forecastWind1 = document.querySelector('.wind1');
const forecastWind2 = document.querySelector('.wind2');
const forecastWind3 = document.querySelector('.wind3');
const forecastWind4 = document.querySelector('.wind4');
const forecastWind5 = document.querySelector('.wind5');

const forecastHumidity1 = document.querySelector('.humidity1');
const forecastHumidity2 = document.querySelector('.humidity2');
const forecastHumidity3 = document.querySelector('.humidity3');
const forecastHumidity4 = document.querySelector('.humidity4');
const forecastHumidity5 = document.querySelector('.humidity5');


// Weather Fetch start

var fetchWeather = function(city){
    if (searchInput.value.trim() !== "") {
        city = searchInput.value.trim();
     } else {
        city = city;
     }
    
    let apiURL= ('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key);
    

    fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                
                let today= new Date().toLocaleDateString();
                var PrimaryWeatherIcon = data.weather[0].icon;
                mainDate.innerHTML = data.name + "  " + today + "  " + "<img id='PrimaryWeatherIcon' src='https://openweathermap.org/img/wn/" + PrimaryWeatherIcon + ".png'>";
                

                var lat = data.coord.lat;
                var lon = data.coord.lon;
                var tempK = data.main.temp;
                var tempF = Math.round(1.8*(tempK-273)+32);
                var wind = data.wind.speed;
                var humidity = data.main.humidity;
                mainTemp.textContent = "Temperature: " + tempF + "°F";
                mainWind.textContent = "Wind: " + wind + " MPH";
                mainHumidity.textContent = "Humidity: " + humidity + "%";
                if (humidity > 85){
                mainHumidity.classList.add('bg-danger');}
                else if (humidity < 70){
                    mainHumidity.classList.add('bg-info')
                }
                else {
                    mainHumidity.classList.add('bg-warning')
                }
            

                getFiveDay (lat,lon);
            })
        }
    })}

 function getFiveDay(lat,lon) {
    let apiURL =('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key);
    console.log(apiURL)
    fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);

                //Day 1

                var getDay1Date = data.daily[1].dt;
                let day1Date = new Date(getDay1Date*1000).toLocaleDateString();
                var day1TempK = data.daily[1].temp.day;
                var day1TempF = Math.round(1.8*(day1TempK-273)+32);
                var day1Wind = data.daily[1].wind_speed;
                var day1Humidity = data.daily[1].humidity;
                var day1WeatherIcon = data.daily[1].weather[0].icon;
                forecastDate1.innerHTML = "<b>" + day1Date + "</b>" + "<img id='WeatherIconOne' src='https://openweathermap.org/img/wn/" + day1WeatherIcon + ".png'>";

                forecastTemp1.textContent = "Temp: " + day1TempF + "°F";
                forecastWind1.textContent = "Wind: " + day1Wind + " MPH"; 
                forecastHumidity1.textContent = "Humidity: " + day1Humidity + "%";


                //Day 2

                var getDay2Date = data.daily[2].dt;
                let day2Date = new Date(getDay2Date*1000).toLocaleDateString();
                var day2TempK = data.daily[2].temp.day;
                var day2TempF = Math.round(1.8*(day2TempK-273)+32);
                var day2Wind = data.daily[2].wind_speed;
                var day2Humidity = data.daily[2].humidity;
                var day2WeatherIcon = data.daily[2].weather[0].icon;
                forecastDate2.innerHTML = "<b>" + day2Date + "</b>" + "<img id='WeatherIconTwo' src='https://openweathermap.org/img/wn/" + day2WeatherIcon + ".png'>";

                forecastTemp2.textContent = "Temp: " + day2TempF + "°F";
                forecastWind2.textContent = "Wind: " + day2Wind + " MPH"; 
                forecastHumidity2.textContent = "Humidity: " + day2Humidity + "%";


                //Day 3

                var getDay3Date = data.daily[3].dt;
                let day3Date = new Date(getDay3Date*1000).toLocaleDateString();
                var day3TempK = data.daily[3].temp.day;
                var day3TempF = Math.round(1.8*(day3TempK-273)+32);
                var day3Wind = data.daily[3].wind_speed;
                var day3Humidity = data.daily[3].humidity;
                var day3WeatherIcon = data.daily[3].weather[0].icon;
                forecastDate3.innerHTML = "<b>" + day3Date + "</b>" + "<img id='WeatherIconThree' src='https://openweathermap.org/img/wn/" + day3WeatherIcon + ".png'>";

                forecastTemp3.textContent = "Temp: " + day3TempF + "°F";
                forecastWind3.textContent = "Wind: " + day3Wind + " MPH"; 
                forecastHumidity3.textContent = "Humidity: " + day3Humidity + "%";

                //Day 4

                var getDay4Date = data.daily[4].dt;
                let day4Date = new Date(getDay4Date*1000).toLocaleDateString();
                var day4TempK = data.daily[4].temp.day;
                var day4TempF = Math.round(1.8*(day4TempK-273)+32);
                var day4Wind = data.daily[4].wind_speed;
                var day4Humidity = data.daily[4].humidity;
                var day4WeatherIcon = data.daily[4].weather[0].icon;
                forecastDate4.innerHTML = "<b>" + day4Date + "</b>" + "<img id='WeatherIconFour' src='https://openweathermap.org/img/wn/" + day4WeatherIcon + ".png'>";

                forecastTemp4.textContent = "Temp: " + day4TempF + "°F";
                forecastWind4.textContent = "Wind: " + day4Wind + " MPH"; 
                forecastHumidity4.textContent = "Humidity: " + day4Humidity + "%";

                
                //Day 5

                var getDay5Date = data.daily[5].dt;
                let day5Date = new Date(getDay5Date*1000).toLocaleDateString();
                var day5TempK = data.daily[5].temp.day;
                var day5TempF = Math.round(1.8*(day5TempK-273)+32);
                var day5Wind = data.daily[5].wind_speed;
                var day5Humidity = data.daily[5].humidity;
                var day5WeatherIcon = data.daily[5].weather[0].icon;
                forecastDate5.innerHTML = "<b>" + day5Date + "</b>" + "<img id='WeatherIconFive' src='https://openweathermap.org/img/wn/" + day5WeatherIcon + ".png'>";

                forecastTemp5.textContent = "Temp: " + day5TempF + "°F";
                forecastWind5.textContent = "Wind: " + day5Wind + " MPH"; 
                forecastHumidity5.textContent = "Humidity: " + day5Humidity + "%";

            })
            }
            })}

function recentSearches(){
    document.getElementById("search-history").textContent="";
    for (let i = 0; i < localStorage.length; i++) {
             let pastSearch = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if ( i===5) {
                return;
            }
            console.log(localStorage)

            var button = document.createElement("button");
            button.classList.add("btn2");
            button.classList.add("btn-dark");
            button.classList.add("w-100");
            button.classList.add("mb-3");
            document.getElementById("search-history").appendChild(button);
            button.textContent = pastSearch;
            
}}

//loads recent search history

recentSearches()


//Click Listener that will search city and add to local storage
$('.btn').on('click', function(){
    
    var searchInput = document.getElementById('search-weather').value;
    if (searchInput !== ''){
    localStorage.setItem(JSON.stringify(searchInput), JSON.stringify(searchInput));
    localStorage.removeItem("mytime");
    fetchWeather()
    recentSearches()}
    else {
        window.alert("Please Input a City");
    }
    
    
})


//Click listener on Recent Search Bars
$('.btn2').on('click', function(){
    var searchInput = $(this).text();
fetchWeather(searchInput)
})