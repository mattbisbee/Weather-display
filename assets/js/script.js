
function searchCity() {
  
  let cityName = document.querySelector('#cityName').value;

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

        var currentCity = response.name;
        var currentCityEl = document.querySelector('#currentCity');
        currentCityEl.innerHTML = currentCity;

        var currentDayEl = document.querySelector('#currentDay');
        currentDayEl.innerHTML = currentDay;

        var currentTemp = response.main.temp;
        var currentTempEl = document.querySelector('#current0');
        currentTempEl.innerHTML = 'Current Temp: ' + currentTemp + ' ℉';

        var currentWind = response.wind.speed;
        var currentWindEl = document.querySelector('#wind0');
        currentWindEl.innerHTML = 'Wind Speed: ' + currentWind + ' mph';

        var currentHumid = response.main.humidity;
        var currentHumidEl = document.querySelector('#humidity0');
        currentHumidEl.innerHTML = 'Humidity: ' + currentHumid + '%';


        var latitude = response.coord.lat;

        var longitude = response.coord.lon;

        localStorage.setItem(currentCity,currentCity);
      
        var values = [];

        function allStorage() {
          keys= Object.keys(localStorage),
          i=keys.length;

          while (i--) {
            values.push(localStorage.getItem(keys[i]))
          }
          console.log(values);
          return values;
        }
        allStorage();

        
        var recentSearchDiv = document.getElementById('recentSearches');

        
        for (i = 0; i < values.length; i++) {
          $('#searchBtn').click(function() {
            $('#recentSearches').empty();
          });
          var createBtn = document.createElement('button');
          createBtn.setAttribute('id', 'recentSearchBtn');
          createBtn.innerHTML = values[i];
          recentSearchDiv.appendChild(createBtn);
        }



        fetch(
          'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=minutely,hourly&units=imperial&appid=47cb69761d77bd9169b3d2a6130a2f5f'
          )
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            
            
            var currentUvIndex = response.current.uvi;
            var currentUvEl = document.querySelector('#uvIndex0');
            currentUvEl.innerHTML = 'UV Index: ' + currentUvIndex;

            //tomorrow (day 1 forcast)
            var day1El = document.querySelector('#header1');
            day1El.innerHTML = day1;
            
            var day1High = response.daily[1].temp.max;
            var day1HighEl = document.querySelector('#high1');
            day1HighEl.innerHTML = 'High: ' + day1High + ' ℉';
            
            var day1Low = response.daily[1].temp.min;
            var day1LowEl = document.querySelector('#low1');
            day1LowEl.innerHTML = 'Low: ' + day1Low + ' ℉';
            
            var day1Wind = response.daily[1].wind_speed;
            var day1WindEl = document.querySelector('#wind1');
            day1WindEl.innerHTML = 'Wind: ' + day1Wind + ' mph';
            
            var day1Humid = response.daily[1].humidity;
            var day1HumidEl = document.querySelector('#humidity1');
            day1HumidEl.innerHTML = 'Humidity: ' + day1Humid + '%';
            
            
            //day 2 forcast
            var day2El = document.querySelector('#header2');
            day2El.innerHTML = day2;
            
            var day2High = response.daily[2].temp.max;
            var day2HighEl = document.querySelector('#high2');
            day2HighEl.innerHTML = 'High: ' + day2High + ' ℉';
            
            var day2Low = response.daily[2].temp.min;
            var day2LowEl = document.querySelector('#low2');
            day2LowEl.innerHTML = 'Low: ' + day2Low + ' ℉';
            
            var day2Wind = response.daily[2].wind_speed;
            var day2WindEl = document.querySelector('#wind2');
            day2WindEl.innerHTML = 'Wind: ' + day2Wind + ' mph';
            
            var day2Humid = response.daily[2].humidity;
            var day2HumidEl = document.querySelector('#humidity2');
            day2HumidEl.innerHTML = 'Humidity: ' + day2Humid + '%';
            
            //day 3 forcast
            var day3El = document.querySelector('#header3');
            day3El.innerHTML = day3;
            
            var day3High = response.daily[3].temp.max;
            var day3HighEl = document.querySelector('#high3');
            day3HighEl.innerHTML = 'High: ' + day3High + ' ℉';
            
            var day3Low = response.daily[3].temp.min;
            var day3LowEl = document.querySelector('#low3');
            day3LowEl.innerHTML = 'Low: ' + day3Low + ' ℉';
            
            var day3Wind = response.daily[3].wind_speed;
            var day3WindEl = document.querySelector('#wind3');
            day3WindEl.innerHTML = 'Wind: ' + day3Wind + ' mph';
            
            var day3Humid = response.daily[3].humidity;
            var day3HumidEl = document.querySelector('#humidity3');
            day3HumidEl.innerHTML = 'Humidity: ' + day3Humid + '%';
            
            //day 4 forcast
            var day4El = document.querySelector('#header4');
            day4El.innerHTML = day4;
            
            var day4High = response.daily[4].temp.max;
            var day4HighEl = document.querySelector('#high4');
            day4HighEl.innerHTML = 'High: ' + day4High + ' ℉';
            
            var day4Low = response.daily[4].temp.min;
            var day4LowEl = document.querySelector('#low4');
            day4LowEl.innerHTML = 'Low: ' + day4Low + ' ℉';
            
            var day4Wind = response.daily[4].wind_speed;
            var day4WindEl = document.querySelector('#wind4');
            day4WindEl.innerHTML = 'Wind: ' + day4Wind + ' mph';
            
            var day4Humid = response.daily[4].humidity;
            var day4HumidEl = document.querySelector('#humidity4');
            day4HumidEl.innerHTML = 'Humidity: ' + day4Humid + '%';
            
            //day 5 forcast
            var day5El = document.querySelector('#header5');
            day5El.innerHTML = day5;
            
            var day5High = response.daily[5].temp.max;
            var day5HighEl = document.querySelector('#high5');
            day5HighEl.innerHTML = 'High: ' + day5High + ' ℉';
            
            var day5Low = response.daily[5].temp.min;
            var day5LowEl = document.querySelector('#low5');
            day5LowEl.innerHTML = 'Low: ' + day5Low + ' ℉';
            
            var day5Wind = response.daily[5].wind_speed;
            var day5WindEl = document.querySelector('#wind5');
            day5WindEl.innerHTML = 'Wind: ' + day5Wind + ' mph';
            
            var day5Humid = response.daily[5].humidity;
            var day5HumidEl = document.querySelector('#humidity5');
            day5HumidEl.innerHTML = 'Humidity: ' + day5Humid + '%';
          });
        });
      }
