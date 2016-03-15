import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={temp} color="red" units="K"/>
                </td>
                <td>
                    <Chart data={humidity} color="green" units="кПа"/>
                </td>
                <td>
                    <Chart data={pressure} color="blue" units="%"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>Город</th>
                    <th>Температура, К</th>
                    <th>Давление, кПа</th>
                    <th>Влажность, %</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStatetoProps({weather}) {
  return {weather};
}
export default connect(mapStatetoProps)(WeatherList);
