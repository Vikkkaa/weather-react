import React from "react";
import axios from "axios";

export default function Weather(props) {

function handleSubmit(response){
    alert(`the weather in ${response.data.name} is ${response.data.main.temp}`);
}

let apiKey = "c4c34c2ee0b71307b00dc7655493ef9a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleSubmit);

  return <h2>Hello Weather</h2>;
}
