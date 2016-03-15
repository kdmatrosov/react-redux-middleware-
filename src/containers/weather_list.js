import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);

        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    <Sparklines height={120} width={280} data={temp}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={280} data={humidity}>
                        <SparklinesLine color="green"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={280} data={pressure}>
                        <SparklinesLine color="blue"/>
                    </Sparklines>
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
                    <th>Температура</th>
                    <th>Давление</th>
                    <th>Влажность</th>
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
