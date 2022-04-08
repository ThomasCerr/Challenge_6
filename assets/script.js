// Click Listener that activates 2  three functions:
// (1) City, Temp, Humidity, UV Index in main box
// (2) 5 Day forecast - Temp, Wind, Humidity in 2nd box
// (3) Creates a recent search history div of what was inputted, and saved to local storag


//Current Forecast Variables

const mainDate = document.querySelector('.mainDate');
const mainTemp = document.querySelector('.mainTemp');
const mainHumidity = document.querySelector('.mainHumidity');
const mainUVIndex = document.querySelector('.mainUVIndex');


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



//API Calll

// let apiURL = ();
// console.log(apiURL)
// fetch(apiUrl).then(function (response) {
//     response.json().then(function (data) {
//         console.log(data);})})




//Click Listener
$('.btn').on('click', function(){
    console.log('hello');
    //Function (1)
    //Function (2)
})