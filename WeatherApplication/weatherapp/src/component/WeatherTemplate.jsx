import React, { useEffect, useState } from 'react'
import "../component/Weather.css";
import axios from "axios";
const WeatherTemplate = () => {

    const sample = [{
        "coord": {
            "lon": 79.9501,
            "lat": 23.167
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 287.15,
            "feels_like": 285.91,
            "temp_min": 287.15,
            "temp_max": 287.15,
            "pressure": 1015,
            "humidity": 50,
            "sea_level": 1015,
            "grnd_level": 968
        },
        "visibility": 10000,
        "wind": {
            "speed": 1.83,
            "deg": 68,
            "gust": 1.83
        },
        "clouds": {
            "all": 0
        },
        "dt": 1732299280,
        "sys": {
            "country": "IN",
            "sunrise": 1732237130,
            "sunset": 1732276455
        },
        "timezone": 19800,
        "id": 1269633,
        "name": "Jabalpur",
        "cod": 200
    }]
    const [city, setCity] = useState(""||"Jabalpur");
    const [cityDetails, setCityDetails] = useState([]);
    const [dsample, setSample] = useState(cityDetails);
    const getWeatherDetails = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11a2ddd68979258cf66328666b2cbac7`).then((res) => {
            setCityDetails(res?.data);
            console.log(res.data)
        }).catch((error) => { console.log(error) })
    }
    useEffect(() => {
        getWeatherDetails();
    }, [])
    console.log(dsample)
    
    
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date()
    const dayIndex = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const currentDate = `${date}-${month}-${year}`;
    let day = weekDay[dayIndex];
    let options = { timeStyle: 'short', hour12: true };
    let timeString = today.toLocaleTimeString('en-US', options);
    let dayOrNight = (today.getHours() >= 6 && today.getHours <= 18) ? "Day" : "Night";
    
    const location = cityDetails?.name;
    const temperature = (cityDetails?.main?.temp - 273.15)?.toFixed(0);
    // const description = cityDetails?.weather[0]?.description;
    // const icon = cityDetails?.weather[0]?.icon;
    const wind = cityDetails?.wind?.speed;
    const humadity = cityDetails?.main?.humidity;
    const feel = (cityDetails?.main?.feels_like - 273.15).toFixed(0);
    const pressure = cityDetails?.main?.pressure;
    const clouds = cityDetails?.clouds?.all;
    const tempMax = cityDetails?.main?.temp_max;
    const tempMin = cityDetails?.main?.temp_min;
    const sunRise = cityDetails?.sys?.sunrise;
    const sunSet = cityDetails?.sys?.sunset;
    const lat = cityDetails?.coord?.lat;
    const lon = cityDetails?.coord?.lon;
    const timezone = cityDetails?.timezone;
    const handleSearchInput = async()=>{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11a2ddd68979258cf66328666b2cbac7`).then((res) => {
            setCityDetails(res.data);
            console.log(res.data)
        }).catch((error) => { console.log(error) })
    }
    const dummy = [
        {
            name: "Wind",
            value: `${wind} km/h`,
            max: "null",
            min: "null"
        },
        {
            name: "Humadity",
            value: `${humadity}%`,
            max: "null",
            min: "null"
        },
        {
            name: "Real Feels",
            value: `${feel} Degree`,
            max: "null",
            min: "null"
        },{
            name: "Pressure",
            value: `${pressure} mb`,
            max: "null",
            min: "null"
        },
        {
            name: "Chance of rain",
            value: clouds,
            max: "null",
            min: "null"
        },
        {
            name: "Temperature History",
            value: "",
            max: `Max: ${(tempMax - 273.15).toFixed(0)}`,
            min: `Min: ${(tempMin - 273.15).toFixed(0)}`
        },{
            name: "Sun",
            value: "",
            max: `Sunrise: ${sunRise}`,
            min: `Sunset: ${sunSet}`
        },
        {
            name: "Timezone",
            value: timezone,
            max: "null",
            min: "null"
        },
        {
            name: "Coord",
            value: "",
            max: `Lat: ${lat}`,
            min: `Lon: ${lon}`
        },
        
    ]
    return (
        <div className='container'>
            <div className='weather-detail-container'>
                <div className='search-container'>
                    <input className='search-input' type='text' placeholder='Search by city name......' onChange={(e) => { setCity(e.target.value) }} />

                    <button className='search-button' onClick={handleSearchInput}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                </div>
                <div className='weather-details'>
                    {/* <img className='weather-image' src={`http://openweathermap.org/img/w/${icon}.png`} alt='weather-image' /> */}
                    <h1 className='weather-temp'>{temperature}<span>&#8451;</span></h1>
                    {/* <p className='weather-description'>{description}</p> */}
                    <div className='partition'></div>
                    <div className='date-container'>
                        <p className='current-date'>{currentDate}</p>
                        <p className='current-day-time'>{day}, {timeString}</p>
                        <p className='current-day-or-night'>{dayOrNight}</p>
                    </div>
                    <p className='current-location'>{location}</p>
                </div>
            </div>
            <div className='weather-specification-container'>
                <h3 className='heading-day'>Today</h3>
                <div className='specification-container'>
                {dummy.map((d,index)=>{
                    return(
                        <div className='card-container' key={index}>
                            <p className='p-tag'>{d.name}</p>
                            <p className='p-tag'>{d.value}</p>
                            {d.max === "null" && d.min === "null" ? (
                                <></>
                            ) : (
                                <div>
                                    <p className='p-tag'>{d.max}</p>
                                    <p className='p-tag'>{d.min}</p>
                                </div>
                            )}
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default WeatherTemplate
