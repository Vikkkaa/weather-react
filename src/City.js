import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./City.css";

export default function City(props) {
 
  return (
    <div className="row">
      <div className="col-7">
        <h1 className="city-name">{props.citySearch.city}</h1>
      </div>
      <div className="col-5">
        <h1 className="country">{props.citySearch.country}</h1>
      </div>
    </div>
  );
}
