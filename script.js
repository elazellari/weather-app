//global variables
const container = document.querySelector(".container");
async function getWeather(selectedCity) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}?unitGroup=us&key=M8V47U6EQ5XQSTQBETS9C4UX3&contentType=json`,
    { mode: "cors" }
  );
  const weather = await response.json();
  console.log(weather);
  console.log(
    `Location: ${weather.address}, Temperature: ${fToCelcius(
      weather.currentConditions.temp
    )} celcius`
  );
  let h2 = document.createElement("h2");
  let h1 = document.createElement("h1");

  h2.innerText = `City: ${weather.address}`;
  h1.innerText = `${fToCelcius(weather.currentConditions.temp)} °C`;
  container.append(h2, h1);
}

function fToCelcius(temp) {
  return (((temp - 32) * 5) / 9).toFixed(1);
}

//get value from search input
const search = document.querySelector(".search");
const city = document.querySelector("#city");

search.addEventListener("click", () => {
  getWeather(city.value);
});
