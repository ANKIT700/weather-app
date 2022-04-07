import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Weather.css";
import { geolocated } from "react-geolocated";


const apiKey = "bcab616c646369b4ad952491a0fd8509";
const Weather = () => {
  const [city, setCity] = useState("mohali");
  const [searchValue, setSearchValue] = useState(true);



  useEffect(()=>{
    if(this.props.isGeolocationAvailable)
    {
debugger
    }
  },[]) 

  useEffect(() => {
    if (searchValue) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        )
        .then((response) => {
          let weatherData = response.data;
          const { name } = weatherData;
          const { icon, description } = weatherData.weather[0];
          const { temp, humidity } = weatherData.main;
          const { speed } = weatherData.wind;
          document.querySelector(".city").innerHTML = "Weather in " + name;
          document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + "@2x.png";
          document.querySelector(".description").innerText = description;
          document.querySelector(".temp").innerText = temp + "  °C";
          document.querySelector(".humidity").innerText = humidity;
          document.querySelector(".humidity").innerText =
            "Humidity : " + humidity + " %";
          document.querySelector(".wind").innerText =
            "Wind Speed : " + speed + " km/h";

          document.querySelector(".weather").classList.remove("loader");
          document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
          setSearchValue(false);
        });
    }
  }, [searchValue]);

  const search = () => {
    setSearchValue(true);
  };

  const keyPresshandler=(e)=>{
    if(e.keyCode == 13)
    {
        return false; // returning false will prevent the event from bubbling up.
    }
    else
    {
        return true;
    }
  }

  return (
    <div class="main-card">
      <div class="search">
        <input
          type="text"
          class="search-bar"
          placeholder="Search City..."
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e)=>keyPresshandler(e)}
        />
        <button class="search-button" onClick={() => search()}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            viewBox="0 0 16 16"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
          </svg>
        </button>
      </div>
      <div class="weather loader">
        <h2 class="city"></h2>
        <div class="flex">
          <img class="icon" src="" alt="" />
          <div class="description"></div>
          <div class="temp"></div>
        </div>
        <div class="flex-bottom">
          <div class="humidity"></div>
          <div class="wind"></div>
        </div>
      </div>
    </div>
  );
};


export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Weather);
