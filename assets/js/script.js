fetch(
'https://api.openweathermap.org/data/2.5/onecall?lat=47.77&lon=-116.80&exclude=hourly,daily&appid=4f38c6ee691410a61244d9d62be5d701' 
 )
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });