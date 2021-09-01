import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Form } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { loadWeather } from './Helper';
import WeatherCard from './WeatherCard';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

function SearchComp() {
    const [city, setCity] = useState("");
    const [coords, setCoords] = useState({ place: "", lat: 0, lon: 0 })
    const { place, lat, lon } = coords;
    const [weather, setWeather] = useState({})

    const convertToArray = (res, obj) => {
        delete res.data;
        // res.data = {};
        res.days = [obj]
        return res
    }

    useEffect(async () => {
        if (place || lat || lon) {
            const response = await loadWeather(coords);
            // let data = [{}, {}, {}, {}, {}, {}]
            if (response.status === 200) {
                if (response.data.days) {
                    setWeather(response.data)
                } else {
                    let respData = convertToArray(response, response.data)
                    setWeather(respData)
                }

            }
        }
    }, [coords])
    console.log(coords)

    const handleClick = (e) => {
        e.preventDefault();
        setCoords({ ...coords, place: city })

    }
    const getMyLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            let latt = position.coords.latitude;
            let lonn = position.coords.longitude;
            // console.log(lat, lon)
            setCoords({ ...coords, place: "", lat: latt, lon: lonn })
        })
    }

    return (<Container >
        <Row>
            <Col>
                <Form onSubmit={handleClick}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Search Weather By City</Form.Label>
                        <div className="search">
                            <Form.Control type="text" placeholder="City..." onChange={(e) => setCity(e.target.value)} />
                            <IconButton type="submit"><SearchIcon /></IconButton>
                            <IconButton type="button" onClick={() => { getMyLocation() }}><LocationSearchingIcon /></IconButton>
                        </div>

                    </Form.Group>
                </Form>
            </Col>


        </Row>
        <Row xs={1} sm={2} md={2} lg={3} className="g-4">

            {weather.days && weather.days.map((day, id) => {
                return <WeatherCard key={id} day={day} />
            })}
        </Row>


    </Container>)
}

export default SearchComp;