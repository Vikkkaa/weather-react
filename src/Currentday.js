import axios from "axios";
import { rampLoading } from "fontawesome";
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./Currentday.css";

export default function Currentday() {
  const [ready, setReady] = useState(false);
  const [CurrentdayData, setCurrentdayData] = useState({});

  function handleSubmit(response) {
    console.log(response.data);
    setReady(true);
    setCurrentdayData({
      ready: true,
      temperature: response.data.main.temp,
      imgUrl: response.data.weather[0].icon,
      data: "Sunday 31/07",
      description: response.data.weather[0].description,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
    });}

    if (ready) {
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
                <span className="temp">{Math.round(CurrentdayData.temperature)}</span>
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
                  Wind: <span>{Math.round(CurrentdayData.wind)}</span> km/h
                </div>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      let city = "London";
      let apiKey = "c4c34c2ee0b71307b00dc7655493ef9a";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleSubmit);
      return "Loading..";
    }
  }

