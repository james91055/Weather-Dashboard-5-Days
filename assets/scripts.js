function initPage() {
  const cityEl = document.getElementById("enter-city");
  const searchEl = document.getElementById("search-button");
  const clearEl = document.getElementById("clear-history");
  const nameEl = document.getElementById("city-name");
  const currentPicEl = document.getElementById("current-pic");
  const currentTempEl = document.getElementById("temperature");
  const currentHumidityEl = document.getElementById("humidity");
  const currentWindEl = document.getElementById("wind-speed");
  const currentUVEl = document.getElementById("UV-index");
  const historyEl = document.getElementById("history");
  var fivedayEl = document.getElementById("fiveday-header");
  var todayweatherEl = document.getElementById("today-weather");
  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

  const apiKey = "da15cdae26c7c2245f032f9d07a7a1cd";
  const cityName = "irvine";
  function getWeather(cityName) {
    // Execute a current weather get request from open weather api
    let queryURL =
      "https://api.openweathermap.org/data/3.0/onecall?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios.get(queryURL).then(function (response) {
      console.log(response);
      todayweatherEl.classList.remove("d-none");
    });
  }

  searchEl.addEventListener("click", function () {
    const searchTerm = cityEl.value;
    getWeather(searchTerm);
    searchHistory.push(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    renderSearchHistory();
  });

  clearEl.addEventListner("click", function () {
    localStorage.clear();
    searchHistory = [];
    renderSearchHistory();
  });

  function renderSearchHistory() {
    historyEl.innerHTML = "";
    for (let i = 0; i < searchHistory.length; i++) {
      const historyItem = document.createElement("input");
      historyItem.setAttribute("type", "text");
      historyItem.setAttribute("class", "form-control d-block bh-white");
      historyItem.setAttribute("readonly", "true");
      historyItem.setAttribute("value", "searchHistory[i]");
      historyItem.addEventListner("click", function () {
        getWeather(historyItem.value);
      });
      historyEl.append(historyItem);
    }
  }

  renderSearchHistory();
  if (searchHistory.length > 0) {
    getWeather(searchHistory[searchHistory.length - 1]);
  }
}
initPage();
