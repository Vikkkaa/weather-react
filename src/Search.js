import React, {useState} from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded,setLoaded] = useState(false);

  function handleSubmit(event){
    event.preventDefault();

     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4c34c2ee0b71307b00dc7655493ef9a&units=metric`;
     axios.get(apiUrl).then();
  }

  function updateCity(event){
    setLoaded(true);
    setCity(event.target.value);
  }

 if (loaded) {return (
    <form id="search-form" onSubmit={handleSubmit}>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <div className="input-group mb-2" >
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={updateCity}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onclick="submitSearch(event)"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <span>
          <button type="button" className="btn btn-warning current">
            Current
          </button>
        </span>
      </div>
    </form>
  );
}
  else {
    return (
      <ClipLoader
        color="#000000"
        loading="true"
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
}
