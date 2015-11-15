var fs = require('fs');
var fileLocation = '/sys/bus/w1/devices/28-0000060416e5/w1_slave';


function airTempLoop() {
  fs.readFile(fileLocation, 'utf8', function (err,data) {
    if (err) throw err;
    matches = data.match(/t=([0-9]+)/);
    temperatureC = parseInt(matches[1]) / 1000;
    temperatureF = ((temperatureC * 1.8) + 32).toFixed(3);
    output = '{ "temperature": { "celcius": '+ temperatureC +', "fahrenheit": '+ temperatureF +' } }';
    console.log('Your current temperature is ' + temperatureF + ' degrees F.');
    setTimeout(airTempLoop, 1000);
  });
}

setTimeout(airTempLoop, 10);
