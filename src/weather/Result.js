import React from 'react'
import './weather-css.css'
const Result = (props) => {
    const { err, city, temp, presure, wind, sunSet, sunRise, date } = props.weather
    let content = null;
    if (!err && city) {
        const sunriseTie = new Date(sunRise * 1000).toLocaleTimeString()
        const sunsiseTie = new Date(sunSet * 1000).toLocaleTimeString()
        content = (
            <div className="Miasta"> <h3> Wyszukiwanie dla miasta:  <em>{city} </em></h3>
                <h4> Dane dla dnia i godziny {date} </h4>
                <h4> Aktualna temperatura {temp.toFixed(1)} &deg;C </h4>
                <h4> Wschód słońca o:  {sunriseTie}</h4>
                <h4> Zachód słońca o: {sunsiseTie}</h4>
                <h4> Aktualna siła wiatru:  {wind} m/s </h4>
                <h4> Aktualne ciśnienie:{presure}hPa</h4>
            </div>
        )
    }
    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}`
                : content}
        </div>

    )
}

export default Result;