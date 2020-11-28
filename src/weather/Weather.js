import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'
import './weather-css.css'
const time = new Date().toLocaleString()
class Weather extends Component {
    state = {
        value: '',
        date: '',
        sunRise: '',
        sunSet: '',
        temp: '',
        presure: '',
        city: '',
        wind: '',
        err: ''
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleCitySummit = (e) => {
        e.preventDefault();
        const API_KEY = 'aef4f1132c6ed3740261b23ab43cd9b1'
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}&units=metric`

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error("Nie udalo sie")
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState(prevState => ({
                    err: false,
                    date: time,
                    sunRise: data.sys.sunrise,
                    sunSet: data.sys.sunset,
                    temp: data.main.temp,
                    presure: data.main.pressure,
                    city: prevState.value, /// data.name
                    wind: data.wind.speed,
                }))
            })
            .catch(err => {
                this.setState(prev => ({
                    err: true,
                    city: prev.value
                }))
            })

    }

    render() {
        return (
            <div className="main-form">
                <Form value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySummit}
                />
                <Result weather={this.state} />
            </div>
        );
    }
}

export default Weather;
