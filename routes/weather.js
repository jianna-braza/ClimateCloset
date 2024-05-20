import fetch from 'node-fetch'
import parser from 'node-html-parser'
import express from 'express';
var router = express.Router();

router.get('/weather', async function (req, res, next) {
  let response = await fetch("https://weather.com/weather/today/l/d11b92798507670585dc6ca08e0e208012215643a13503c36bba9b42c7b58283")
  let pageText = await response.text()

  // parse html
  let htmlPage = parser.parse(pageText)
  let htmlReturn = "meep"
  let currentTemp = 0;
  let tempTag = '';
  let currentWind = 0;
  let imgTags = htmlPage.querySelectorAll("span");
  for (let i = 0; i < imgTags.length; i++) {
    if (imgTags[i].rawAttrs.includes("MHmYY")) {
      currentTemp = imgTags[i].childNodes[0]._rawText;
    }
    if (imgTags[i].rawAttrs.includes("3Ly7c")) {
      currentWind = imgTags[i].childNodes[1].childNodes[0]._rawText;
    }
  }

  if (currentTemp < 25) {
    tempTag = "freezing! Make sure to bundle up with layers and a winter coat!"
  } else if (currentTemp < 40) {
    tempTag = "cold. Wear a nice winter jacket."
  } else if (currentTemp < 60) {
    tempTag = "cool. Might be nice to have a light jacket or sweatshirt"
  } else if (currentTemp < 80) {
    tempTag = "warm. no need for a jacket :)"
  } else {
    tempTag = "hot! Make sure to wear light layers!"
  }


  htmlReturn = "<h2>The current temperature in Seattle is " + currentTemp + " degrees Fahrenheit/" + ((currentTemp-32) * (5/9)) + " degrees Celcius</h2>";
  htmlReturn += "<p>The current wind speed is " + currentWind + " mph</p>"
  htmlReturn += "<h3>Based on the data above, I think the temperature for today will be " + tempTag + "</h3>"

  res.type("html")
  res.send(htmlReturn)
});

export default router;
