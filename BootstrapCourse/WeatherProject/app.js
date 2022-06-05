const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){
  const query = req.body.CityName;
  const apiKey = "ffd0db5a1d1ef47736c124d2412c0ed2"
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response){
  console.log(response.statusCode);

  response.on("data", function(data) {
    const weatherData = JSON.parse(data);
    const mainTemp = weatherData.main.temp;
    console.log(mainTemp);
    res.send("THe temperature in " + query + " is " + mainTemp);
  })
  });
})


app.listen(3000, function(){
  console.log("Server is running on 3000")
});
