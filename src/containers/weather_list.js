import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component{
  renderWeather(cityData)
  {
    const name = cityData.city.name;
      return (
        <tr key={name}>
          <td>
              {name}
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )
  }
  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Город</th>
              <th>Температура </th>
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
