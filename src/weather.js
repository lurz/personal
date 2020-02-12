import React from 'react'
import './weather.css'

class Weather extends React.Component {
    render(){
        return (
        <div className="weather-wrapper">
            <div className="weather-card madrid">
                <div className="weather-icon">
                    <img src="./images/wicons/day.svg" >
                    </img>
                </div>
                <h1>26º</h1>
                <p>Madrid</p>
            </div>
            <div className="weather-card london">
                <div className="weather-icon">
                    <img src="./images/wicons/cloudy-day-1.svg" >
                    </img>
                </div>
                <h1>14º</h1>
                <p>London</p>
            </div>
        </div>
        );
    }
}

export default Weather