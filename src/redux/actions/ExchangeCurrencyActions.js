import { EXCHANGE_URL } from '../../constants/urls';
import { REQUEST_EXCHANGE_CURRENCY } from '../../constants/actions';

export function requestExchangeCurrency() {

  const request =  fetch(EXCHANGE_URL)
  .then(function (response) {
    return response.text();
  })

  return {
    type: REQUEST_EXCHANGE_CURRENCY,
    payload: request,
  };
}
