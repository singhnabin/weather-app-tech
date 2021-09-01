import React from 'react';
import { Card, Col } from 'react-bootstrap';
import moment from 'moment';
function WeatherCard({ day }) {
    const defaultUrl = "https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png";
    const trunImage = (url) => {
        return url.substring(21);
    }

    return (
        < Col >
            <Card>
                <div className="weather-card">
                    <div className="card-title">
                        <h2>{moment(day.date).format('dddd')}</h2>
                        <h3>{day.date}</h3>
                    </div>


                    <img src={day?.weatherType?.iconUrl ? trunImage(day.weatherType.iconUrl) : defaultUrl} height="120px" />
                    <div className="card-body">{day?.weatherType?.iconDesc}</div>

                    <div className="max-temp">
                        <div className="max-f">
                            <h1>{day.maxTemp}</h1>
                            <p>°F</p>
                            <h3>  Max</h3>
                        </div>


                    </div>
                    <div className="max-temp">
                        <div className="max-f">
                            <h1>{day.minTemp}</h1>
                            <p>°F</p>
                            <h3>Min</h3>
                        </div>


                    </div>
                    <div className="weather-info">
                        <div className="sun">
                            <h5>Sunrise: {day.sunrise} </h5>
                            <h5>Sunset: {day.sunset} </h5>
                        </div>

                        <div className="hum">
                            <h5>Humidity: {day.humidity}</h5>
                            <h5>Max Wind: {day.maxWind}mph </h5>
                        </div>

                    </div>


                </div>
                {/* </div> */}



            </Card>
        </Col >

    )
}

export default WeatherCard;