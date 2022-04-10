// Click Listener that activates 2  three functions:
// (1) City, Temp, Humidity, UV Index in main box
// (2) 5 Day forecast - Temp, Wind, Humidity in 2nd box
// (3) Creates a recent search history div of what was inputted, and saved to local storag

//Miscellaneaous Variables
 var searchInput = document.getElementById('search-weather');
 var key= '6ba32263f12394fd4bdedac009a4a7b3';

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



// var fetchLocation = function(){
//     let city = searchInput.value.trim();
//     console.log(city);
//     // let apiURL = ('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key);
//     let urlUV = `https://api.openweathermap.org/data/2.5/uvi?appid=b8ecb570e32c2e5042581abd004b71bb&lat=${response.coord.lat}&lon=${response.coord.lon}`;
    

// } 


var fetchWeather = function(){
    let city = searchInput.value.trim();
    console.log(city);
    let apiURL= ('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key);
    console.log(apiURL);


    fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                
                let today= new Date().toLocaleDateString();
                mainDate.textContent = data.name + " (" + today + ")" ;
                

                var lat = data.coord.lat;
                var lon = data.coord.lon;
                var tempK = data.main.temp;
                var tempF = Math.round(1.8*(tempK-273)+32);
                var wind = data.wind.speed;
                var humidity = data.main.humidity;
                mainTemp.textContent = "Temperature: " + tempF + "°F";
                mainWind.textContent = "Wind: " + wind + " MPH";
                mainHumidity.textContent = "Humidity: " + humidity + "%";
              
                // var mainUV = data.main.

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

                forecastDate1.textContent = day1Date;
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

                forecastDate2.textContent = day2Date;
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

                forecastDate3.textContent = day3Date;
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

                forecastDate4.textContent = day4Date;
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

                forecastDate5.textContent = day5Date;
                forecastTemp5.textContent = "Temp: " + day5TempF + "°F";
                forecastWind5.textContent = "Wind: " + day5Wind + " MPH"; 
                forecastHumidity5.textContent = "Humidity: " + day5Humidity + "%";

            })
            }
            })}





    // UV Index
    // $.ajax({
    //     url: urlUV,
    //     method: "GET"
    
    // }).then(function (response) {

    //     let currentUV = currentTemp.append("<p>" + "UV Index: " + response.value + "</p>").addClass("card-text");
    //     currentUV.addClass("UV");
    //     currentTemp.append(currentUV);
    //     // currentUV.append("UV Index: " + response.value);
    //     console.log(currentUV);
    // });

// };






// let lat= ''
// let lon= ''
// let apiURL='https://api.openweathermap.org/data/2.5/onecall?lat='+lat +'&lon='+lon+'&appid='+key;
      
// fetch(apiURL)
//             .then(resp=>{
//                 if(!resp.ok) throw new Error(resp.statusText);
//                 return resp.json();
// })
//             .then(data=>{
//             showWeather(data)
// })
//             .catch(console.err);   
// }

// function showWeather() { (response) => {
// console.log(resp);
// let row = document.querySelector('.forecast');
// let html = '<div class="border-dark card border-4">' 
//             '<div class="card-body bg-light p-4">'
//             '<h5 class="card-title date1">Day 1</h5>'
//             '<p class="card-text tempOne">Temp: 65F</p>'
//             '<p class="card-text windOne">Wind: 9.53MPH</p>'
//             '<p class="card-text humidityOne">Humidity: 35%</p>'
//             '</div>'
// //             '</div>';
// }

// }


//Click Listener
$('.btn').on('click', function(){
    console.log('hello');
    fetchWeather()
    // fetchWeather()
    //Function (1)
    //Function (2)
})