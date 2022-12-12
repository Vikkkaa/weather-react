import React from "react";

import "./Currentday.css";

export default function Currentday() {
  let CurrentdayData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
    data: "Sunday 31/07",
    description: "Cloud",
    humid: "77",
    wind: "15",
  };
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="weather-temperature">
          <h2>
            <img
              src={CurrentdayData.imgUrl}
              className="material-icons md-72"
              alt={CurrentdayData.description}
            />
            <span className="temp">25</span>
            <span className="units">°C</span>
          </h2>
        </div>
      </div>
      <div className="col-md-6">
        <div className="weather-description">
          <p>
            <div className="weekday">{CurrentdayData.data}</div>
            <div className="description">
              <span>{CurrentdayData.description}</span>
            </div>
            <div className="humid">
              Humid: <span>{CurrentdayData.humid}</span>%
            </div>
            <div className="wind">
              Wind: <span>{CurrentdayData.wind}</span> km/h
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
