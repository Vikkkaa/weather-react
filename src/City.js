import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./City.css";

export default function City() {
  let CityData = {
    name: "New York",
    country: "USA",
  };
  return (
    <div className="row">
      <div className="col-7">
        <h1 className="city-name">{CityData.name}</h1>
      </div>
      <div className="col-5">
        <h1 className="country">{CityData.country}</h1>
      </div>
    </div>
  );
}
