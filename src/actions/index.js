const API_KEY = '48f665c060e43a9ff7cc79f7268a22f5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER'; // сделано, чтобы сохранить тип неизменным между действием и редьюсером. Сахар - сахар - сахар

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ru`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
