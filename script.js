async function getWeather() {
  let city = document.getElementById("cityInput").value;

  let apiKey = "YOUR_API_KEY"; // replace later
  let url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    let data = await response.json();

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
    `;

  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "❌ Error: " + error.message;
  }
}
