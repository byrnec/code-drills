// # More Practice with Request

// ### In this activity, we're going to be getting a little bit more practice with the request package using the familiar Open Weather API.
var request = require("request");

// * Write a node app that takes in a zip code as a command line argument and displays the temperature forecast for the next 5 days
var enteredZip = process.argv[2];

console.log(enteredZip);
// * Use `request` and the [Open Weather Map API](https://openweathermap.org/api) for your queries

// var url = api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}

// * Output the date and time of each of the three hour forecasts you get back from the API


request('https://api.openweathermap.org/data/2.5/forecast?appid=f54f78656d096d76ff850ad75c4be18e&zip=' + enteredZip +',us', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
 
  var data = body.list;

  for (var i = 0; i < 5; i++){
      console.log(data[i].main.temp);
      console.log(data[i].dt);

  }
  //console.log(body.list[0].main.temp, Math.floor(body.list[0].main.temp * 9/5 -459.67));
  //console.log(body.list[0].dt);
  //console.log(body);
});


// Your output should look something like:
// > node weather.js 94123

// ```
// 2018-08-24 21:00:00 69.64
// 2018-08-25 00:00:00 68.7
// 2018-08-25 03:00:00 62.87
// 2018-08-25 06:00:00 56.75

// ...

// 2018-08-29 06:00:00 58.2
// 2018-08-29 09:00:00 58.54
// 2018-08-29 12:00:00 58.78
// 2018-08-29 15:00:00 59.19
// 2018-08-29 18:00:00 62.61
// ```