import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
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
