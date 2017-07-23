import { REQUEST_INSTRUMENTS, RECIEVE_INSTRUMENTS } from '../../constants/actions';

export default function instrumentsReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_INSTRUMENTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECIEVE_INSTRUMENTS:
      return Object.assign({}, state, {
        payload: action.payload.data,
        isFetching: false,
      });
    default:
  }
  return state;
}
