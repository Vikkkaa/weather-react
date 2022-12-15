import axios from "axios";
import { rampLoading } from "fontawesome";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import "./Currentday.css";

export default function Currentday(props) {
  const [CurrentdayData, setCurrentdayData] = useState({ ready: false });

  function handleSubmit(response) {
    console.log(response.data);

    setCurrentdayData({
      ready: true,
      date: "Thursday 15/12",
      temperature: response.data.main.temp,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

      description: response.data.weather[0].description,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (CurrentdayData.ready) {
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
              <span className="temp">
                {Math.round(CurrentdayData.temperature)}
              </span>
              <span className="units">°C</span>
            </h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="weather-description text-capitalize">
            <p>
              <div className="weekday">{CurrentdayData.date}</div>
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
    let apiKey = "c4c34c2ee0b71307b00dc7655493ef9a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityInput}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);
    return (
      <ClipLoader
        color="#000000"
        loading= "true"
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
}
