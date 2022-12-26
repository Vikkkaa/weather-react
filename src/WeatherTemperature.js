import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit(){
    return (Math.round((props.celsius * 9) / 5 + 32));
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFah}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    
    return (
      <span>
        <span className="temp">{fahrenheit()}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>°C</a> | °F
        </span>
      </span>
    );
  }
}
