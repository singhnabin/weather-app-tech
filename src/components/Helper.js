export const loadWeather = (coord) => {
    let url = "http://localhost:9000/api/weather/";
    if (coord.place) {
        url += `city/${coord.place}`
    } else {
        url += `w?lat=${coord.lat}&lon=${coord.lon}`
    }

    return fetch(url, {
        method: "GET"
    }).then(res => {
        return res.json();
    }).catch(err => {
        console.log(err)
    })
}