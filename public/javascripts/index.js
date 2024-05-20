async function auditUrl() {

  let response = await fetch("/users")
  let responseText = await response.text()

  document.getElementById("results").innerHTML = responseText;
}