const request = require("request");
const argv = require('yargs').argv;

let apiKey = "e7548dc55d9238678f7c5125858461e1";
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


request(url, function(err, response, body) {
    if (err) {
        console.log("error: ", err);
    } else {
        // console.log(url)
        // console.log("body: ", body);
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message)

    }
})

