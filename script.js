async function getWeather() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/toronto?unitGroup=us&key=M8V47U6EQ5XQSTQBETS9C4UX3&contentType=json",
    { mode: "cors" }
  );
  const weather = await response.json();
  console.log(weather);
  console.log(
    `Location: ${weather.address}, Temperature: ${fToCelcius(
      weather.currentConditions.temp
    )} celcius`
  );
}

function fToCelcius(temp) {
  return (((temp - 32) * 5) / 9).toFixed(1);
}
