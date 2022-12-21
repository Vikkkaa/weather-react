import React, {useState} from "react";
import axios from "axios";
import City from "./City";
import Currentday from "./Currentday";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import "./Weather.css";


export default function Weather(props) {
  const [city, setCity] = useState(props.cityInput);
  const [weatherData,setWeatherData] = useState({ready: false});

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt*1000),
      temperature: response.data.main.temp,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

      description: response.data.weather[0].description,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country
    }

    );
  }

  function handleSubmit(event){
    event.preventDefault();
    Search();
  }

  function updateCity(event){
    
    setCity(event.target.value);
    
  }

  function Search(){
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

 if (weatherData.ready) {return (
   <div>
     <City citySearch = {weatherData} />
     <form id="search-form" onSubmit={handleSubmit}>
       <div className="d-grid gap-2 d-md-flex justify-content-md-end">
         <div className="input-group mb-2">
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
     <Currentday data={weatherData} />
   </div>
 );
}
  else {
   Search();
    return (
      "Loading.."
    );
  }
}
