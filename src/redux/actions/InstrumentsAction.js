import axios from 'axios';
import { INSTRUMENTS_URL } from '../../constants/urls';
import {REQUEST_INSTRUMENTS, RECIEVE_INSTRUMENTS} from '../../constants/actions';

export function recieveInstruments() {
  console.log('recieveInstruments')
  const request = axios.get(INSTRUMENTS_URL);
  return {
    type: RECIEVE_INSTRUMENTS,
    payload: request,
  };
}

export function requestInstruments() {
  console.log('requestInstruments')
  return {
    type: REQUEST_INSTRUMENTS,
  };
}
