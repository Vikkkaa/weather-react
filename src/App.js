import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="weather-container">
        <div className="container">
          <Weather cityInput = "Lisbon" />
          
        </div>
        <div className="weather-forecast"></div>
      </div>
      <small className="footer">
        This project was coded by Vik Shpetna and is {""}
        <a
          href="https://github.com/Vikkkaa/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </small>
    </div>
  );
}
