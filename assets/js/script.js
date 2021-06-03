function searchCity() {
  var cityName = document.querySelector('#cityName').value;
  console.log (cityName);
  currentDay = moment().format('dddd, MMMM Do YYYY');

  //setting time for the 5 day forecast
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
      
        //today
        var currentCity = response.name;
        var currentCityEl = document.querySelector('#currentCity');
        currentCityEl.innerHTML = '<h2>' + currentCity + '</h2>';

        var currentDayEl = document.querySelector('#currentDay');
        currentDayEl.innerHTML = '<p>' + currentDay + '</p>';

        var currentTemp = response.main.temp;
        var currentTempEl = document.querySelector('#current0');
        currentTempEl.innerHTML = '<p> Current Temp: ' + currentTemp + ' ℉</p>';

        var todayWind = response.wind.speed;
        var todayWindEl = document.querySelector('#wind0');
        todayWindEl.innerHTML = '<p> Wind Speed: ' + todayWind + ' mph</p>';

        var todayHumid = response.main.humidity;
        var todayHumidEl = document.querySelector('#humidity0');
        todayHumidEl.innerHTML = '<p> Humidity: ' + todayHumid + ' %</p>';
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

        //day 2 forcast
        var day2El = document.querySelector('#header2');
        day2El.innerHTML = day2;

        //day 3 forcast
        var day3El = document.querySelector('#header3');
        day3El.innerHTML = day3;

        //day 4 forcast
        var day4El = document.querySelector('#header4');
        day4El.innerHTML = day4;

        //day 5 forcast
        var day5El = document.querySelector('#header5');
        day5El.innerHTML = day5;
      });
    }