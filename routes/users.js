import {promises as fs} from 'fs'
import fetch from 'node-fetch'
import parser from 'node-html-parser'
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  let response = await fetch("https://weather.com/weather/today/l/d11b92798507670585dc6ca08e0e208012215643a13503c36bba9b42c7b58283")
  let pageText = await response.text()

  // parse html
  let htmlPage = parser.parse(pageText)

  // go through each img tag and create html
  let htmlReturn = "meep"
  let currentTemp = 0;
  let imgTags = htmlPage.querySelectorAll("span");
  for (let i = 0; i < imgTags.length; i++) {
    if (imgTags[i].rawAttrs.includes("MHmYY")) {
      currentTemp = imgTags[i].childNodes[0]._rawText;
    }
  }
  htmlReturn = "<h2>The current temperature in Seattle is " + currentTemp + " degrees Fahrenheit</h2>";

  res.type("html")
  res.send(htmlReturn)
});


export default router;
