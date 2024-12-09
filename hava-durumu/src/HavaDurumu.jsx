

import React,{useState,useEffect} from "react";
function HavaDurumu(){

    const url = 'https://api.openweathermap.org/data/2.5/';
    const key = '48e31020dbb1b39cc1a671cbf3179bef';

    const[city,setCity]=useState("");
    const[weatherData,setWeatherData]=useState(0);
    const setQuery=(e)=>{
        if(e.key=="Enter"){
            getResult(city);
        }
     }
    const getResult=(cityName)=>{
        let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
        fetch(query)
        .then(weather=>weather.json())
        .then(display)
        .catch(error=>{
            console.log("hata alındı")
        })
    }
    const display=()=>{
        
    }

    return(
        <div>

        </div>
    );
}