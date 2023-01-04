import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
function handleResponse(response) {
  console.log(response.data);
}

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
  
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="DayWeek">Thu</div>
          <WeatherIcon code="01d" size={48} />
          <div className="DayWeekTemperature">
            <span className="DayWeekTemperature-max">19°</span>
            <span className="DayWeekTemperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
