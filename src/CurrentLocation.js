import React from "react";
import axios from "axios";

export default function CurrentLocation(props) {
  function searchLocation(position) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&&units=metric`;

    axios.get(apiUrl).then(props.weatherSearch);
  }

  function searchCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  return (
    <span>
      <button
        type="button"
        className="btn btn-warning current"
        onClick={searchCurrentLocation}
      >
        Current
      </button>
    </span>
  );
}
