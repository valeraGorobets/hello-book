import axios from 'axios'

export default function(city) {
  const url = `https://query.yahooapis.com/v1/public/yql?q=select * 
    from weather.forecast where woeid in (select woeid from geo.places(1)
    where text="${city}")&format=json`;
  return axios.get(url);
}