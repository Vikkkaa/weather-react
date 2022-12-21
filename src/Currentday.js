import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FormatDate from "./FormatDay";

import "./Currentday.css";
import WeatherIcon from "./WeatherIcon";

export default function Currentday(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="weather-temperature">
            <h2>
              <span className="weather-icon">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </span>
              <span className="temp">{Math.round(props.data.temperature)}</span>
              <span className="units">°C</span>
            </h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="weather-description text-capitalize">
            <div className="weekday">
              <FormatDate date={props.data.date} />
            </div>
            <div className="description">
              <span>{props.data.description}</span>
            </div>
            <div className="humid">
              Humid: <span>{props.data.humid}</span>%
            </div>
            <div className="wind">
              Wind: <span>{Math.round(props.data.wind)}</span> km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
