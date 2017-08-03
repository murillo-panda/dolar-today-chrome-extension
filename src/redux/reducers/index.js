import { combineReducers } from 'redux';
import ExchangeCurrencyReducer from './ExchangeCurrencyReducer';

export default combineReducers({
  exchangeCurrencyData: ExchangeCurrencyReducer,
});
