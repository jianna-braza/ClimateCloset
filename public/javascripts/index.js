async function getWeather() {

  let response = await fetch("/api/weather")
  let responseText = await response.text()

  document.getElementById("results").innerHTML = responseText;
}