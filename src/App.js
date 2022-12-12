import React from "react";
import City from "./City";
import Search from "./Search";
import Currentday from "./Currentday";

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
    </div>
  );
}


