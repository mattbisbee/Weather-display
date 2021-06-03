function searchCity() {
  var cityName = document.querySelector('#cityName').value;




  //setting time for the 5 day forecast
  currentDay = moment().format('dddd, MMMM Do YYYY');
  day1 = moment().add(1, 'd').format('MMMM Do YYYY');
  day2 = moment().add(2, 'd').format('MMMM Do YYYY');
  day3 = moment().add(3, 'd').format('MMMM Do YYYY');
  day4 = moment().add(4, 'd').format('MMMM Do YYYY');
  day5 = moment().add(5, 'd').format('MMMM Do YYYY');


  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&exclude=minutely,hourly&appid=df61be9901e0d1ba10b3408145f698c8' 
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
      
        //today's data
        var searchData = [];

        var currentCity = response.name;
        var currentCityEl = document.querySelector('#currentCity');
        currentCityEl.innerHTML = '<h2>' + currentCity + '</h2>';
        searchData.push(currentCity);

        var currentDayEl = document.querySelector('#currentDay');
        currentDayEl.innerHTML = '<p>' + currentDay + '</p>';
        searchData.push(currentDay);

        var currentTemp = response.main.temp;
        var currentTempEl = document.querySelector('#current0');
        currentTempEl.innerHTML = '<p> Current Temp: ' + currentTemp + ' ℉</p>';
        searchData.push(currentTemp);

        var currentWind = response.wind.speed;
        var currentWindEl = document.querySelector('#wind0');
        currentWindEl.innerHTML = '<p> Wind Speed: ' + currentWind + ' mph</p>';
        searchData.push(currentWind);

        var currentHumid = response.main.humidity;
        var currentHumidEl = document.querySelector('#humidity0');
        currentHumidEl.innerHTML = '<p> Humidity: ' + currentHumid + ' %</p>';
        searchData.push(currentHumid);

        console.log(searchData);

        //push data to local storage
        localStorage.setItem("recentSearches", searchData);

        //display saved info

      });

    fetch(
    'https://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&cnt=5&units=imperial&appid=47cb69761d77bd9169b3d2a6130a2f5f'
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
    
        //tomorrow (day 1 forcast)
        var day1El = document.querySelector('#header1');
        day1El.innerHTML = day1;

        /*var day1High = response.main.temp;
        var day1HighEl = document.querySelector('#high1');
        day1HighEl.innerHTML = '<p> High: ' + day1High + ' ℉</p>';

        var day1Low = response.main.temp;
        var day1LowEl = document.querySelector('#low1');
        day1LowEl.innerHTML = '<p> Low: ' + day1Low + ' ℉</p>';

        var day1Wind = response.wind.speed;
        var day1WindEl = document.querySelector('#wind1');
        day1WindEl.innerHTML = '<p> Wind: ' + day1Wind + ' mph</p>';

        var day1Humid = response.main.humidity;
        var day1HumidEl = document.querySelector('#humidity1');
        day1HumidEl.innerHTML = '<p> Humidity: ' + day1Humid + ' %</p>';*/


        //day 2 forcast
        var day2El = document.querySelector('#header2');
        day2El.innerHTML = day2;
        /*var day2High = response.main.temp;
        var day2HighEl = document.querySelector('#high2');
        day2HighEl.innerHTML = '<p> High: ' + day2High + ' ℉</p>';

        var day2Low = response.main.temp;
        var day2LowEl = document.querySelector('#low2');
        day2LowEl.innerHTML = '<p> Low: ' + day2Low + ' ℉</p>';

        var day2Wind = response.wind.speed;
        var day2WindEl = document.querySelector('#wind2');
        day2WindEl.innerHTML = '<p> Wind: ' + day2Wind + ' mph</p>';

        var day2Humid = response.main.humidity;
        var day2HumidEl = document.querySelector('#humidity2');
        day2HumidEl.innerHTML = '<p> Humidity: ' + day2Humid + ' %</p>';*/

        //day 3 forcast
        var day3El = document.querySelector('#header3');
        day3El.innerHTML = day3;
        /*var day3High = response.main.temp;
        var day3HighEl = document.querySelector('#high3');
        day3HighEl.innerHTML = '<p> High: ' + day3High + ' ℉</p>';

        var day3Low = response.main.temp;
        var day3LowEl = document.querySelector('#low3');
        day3LowEl.innerHTML = '<p> Low: ' + day3Low + ' ℉</p>';

        var day3Wind = response.wind.speed;
        var day3WindEl = document.querySelector('#wind3');
        day3WindEl.innerHTML = '<p> Wind: ' + day3Wind + ' mph</p>';

        var day3Humid = response.main.humidity;
        var day3HumidEl = document.querySelector('#humidity3');
        day3HumidEl.innerHTML = '<p> Humidity: ' + day3Humid + ' %</p>';*/

        //day 4 forcast
        var day4El = document.querySelector('#header4');
        day4El.innerHTML = day4;

        /*var day4High = response.main.temp;
        var day4HighEl = document.querySelector('#high4');
        day4HighEl.innerHTML = '<p> High: ' + day4High + ' ℉</p>';

        var day4Low = response.main.temp;
        var day4LowEl = document.querySelector('#low4');
        day4LowEl.innerHTML = '<p> Low: ' + day4Low + ' ℉</p>';

        var day4Wind = response.wind.speed;
        var day4WindEl = document.querySelector('#wind4');
        day4WindEl.innerHTML = '<p> Wind: ' + day4Wind + ' mph</p>';

        var day4Humid = response.main.humidity;
        var day4HumidEl = document.querySelector('#humidity4');
        day4HumidEl.innerHTML = '<p> Humidity: ' + day4Humid + ' %</p>';*/

        //day 5 forcast
        var day5El = document.querySelector('#header5');
        day5El.innerHTML = day5;

        /*var day5High = response.main.temp;
        var day5HighEl = document.querySelector('#high5');
        day5HighEl.innerHTML = '<p> High: ' + day5High + ' ℉</p>';

        var day5Low = response.main.temp;
        var day5LowEl = document.querySelector('#low5');
        day5LowEl.innerHTML = '<p> Low: ' + day5Low + ' ℉</p>';

        var day5Wind = response.wind.speed;
        var day5WindEl = document.querySelector('#wind5');
        day5WindEl.innerHTML = '<p> Wind: ' + day5Wind + ' mph</p>';

        var day5Humid = response.main.humidity;
        var day5HumidEl = document.querySelector('#humidity5');
        day5HumidEl.innerHTML = '<p> Humidity: ' + day5Humid + ' %</p>';*/
      });
    }