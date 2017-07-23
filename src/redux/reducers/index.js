import { combineReducers } from 'redux';
import InstrumentsReducer from './InstrumentsReducer';

export default combineReducers({
  instruments: InstrumentsReducer,
});
