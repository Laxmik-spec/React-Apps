import React from "react";
import { useWeather } from "../context/Weather";    

const Card = () => {
    const weather = useWeather();
    return (
        <div className="card">
            <img src={weather.data?.current?.condition?.icon} alt=""/>
            <p>{weather.data?.current?.temp_c} C</p>
            <p>{weather.data?.location?.name},{weather.data?.location?.country}</p>
        </div>
    );
}

export default Card;