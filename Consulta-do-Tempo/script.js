const cityNameField = document.querySelector("#input-city");
const testField = document.querySelector("#test");

var weatherInfoList = [];
let bodyLine = document.createElement("tr");

const weatherTable = document.querySelector(".weatherBody")

cityNameField.addEventListener("keypress", (event) =>{

    if (event.key == "Enter"){

        var openweathermapUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameField.value + "&lang=pt_br&appid=" + "0476501ccd3b1e5d455f0e2ab2645079" + "&units=metric";

        var request = new XMLHttpRequest();
        request.open("GET", openweathermapUrl, false);
        request.send();

        let weatherInfo = JSON.parse(request.response);

        console.log(weatherInfo);

        /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

        let weatherActual = weatherInfo.main.temp;
        let weatherFeels = weatherInfo.main.feels_like;
        let weatherMax = weatherInfo.main.temp_max;
        let weatherMin = weatherInfo.main.temp_min;
        let windSpeed = weatherInfo.wind.speed;
        let airHumidity = weatherInfo.main.humidity;

        weatherInfoList = [weatherActual, weatherFeels, weatherMax, weatherMin, windSpeed, airHumidity];

        console.log(weatherInfoList);

        /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

        for (let index = 0; index < weatherInfoList.length; index++) {

            let bodyCell = document.createElement("td");

            bodyCell.textContent = weatherInfoList[index];

            bodyLine.appendChild(bodyCell);

        };

        weatherTable.appendChild(bodyLine);

        /*

        for (let index = 0; index < weatherInfoList.length; index++) {

            console.log(weatherInfoList[index]);
        }

        */
    }
});

cityNameField.addEventListener("change", function(){

    if (cityNameField.value == ""){

        bodyLine.innerHTML = "";
        weatherInfoList = [];

    }
})