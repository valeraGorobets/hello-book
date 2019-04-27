import { combineReducers } from 'redux';
import citiesToFollow from './citiesToFollow';
import detailsOfCityId from './detailsOfCityId';
 
const helloBookApp = combineReducers({
  citiesToFollow,
  detailsOfCityId: detailsOfCityId
});
 
export default helloBookApp;