import React from 'react'
import './weather.css';

import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"

const Weather = () => {
    let api_key="116640f4cebddc4fd4e6d47f5436eb31";

    const search = async ()=>{
        const element=document.getElementsByClassName("city-input")
        if(element[0].value === ""){
            return 0;
        } 
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response=await fetch(url);
        let data= await response.json();

        let humidity=document.getElementsByClassName("humidity-perc")
        let wind=document.getElementsByClassName("wind-speed")
        let temp=document.getElementsByClassName("weather-temp")
        let loc=document.getElementsByClassName("weather-loc")

        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=data.wind.speed+"Km";
        temp[0].innerHTML=data.main.temp+"°C"
        loc[0].innerHTML=data.name;
    }
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='city-input' placeholder='search'/>
        <div onClick={()=>{
            search()
        }} className='search-icon'>
        <img src={search_icon} alt=''/>
        </div>
      </div>
       <div className='weather-img'>
        <img src={cloud_icon}/>
       </div>
       <div className='weather-temp'>24°c </div>
            <div className='weather-loc'>London</div>
                <div className='data-container'>

                <div className='element'>
                    <img src={humidity_icon} className='icon' />
                    <div className='data'>
                        <div className='humidity-perc'>64%</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icon} className='icon'/>
                    <div className='data'>
                        <div className='wind-speed'>18 km</div>
                        <div className='text'>Wind Speed</div>
                    </div>
                </div>

                </div>
          
      
    </div>
  )
}

export default Weather

