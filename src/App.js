import React from "react";
import City from "./City";
import Search from "./Search";
import Currentday from "./Currentday";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-container">
        <div className="container">
          <City />
          <Search />
          <Currentday />
        </div>
        <div className="weather-forecast"></div>
      </div>
      <small class="footer">
        <a href="https://github.com/Vikkkaa/weather-react" target="blank">
          Open-source code
        </a>
        {}by Vik Shpetna
      </small>
    </div>
  );
}


