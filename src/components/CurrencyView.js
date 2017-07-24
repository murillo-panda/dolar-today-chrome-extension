import React, { Component,PropTypes } from 'react';

export default class CurrencyView extends Component {
  static defaultProps = {
    payload: {},
  };
  static propTypes = {
    payload: PropTypes.object,
  };
  render() {
    const {payload} = this.props;
    return (
      <div>
        {
        (payload)?
        <table className='table'>
          <thead>
            <tr className='row header blue'>
              <th>Dolar Today</th>
              <th>Implicito</th>
              <th>Dicon</th>
              <th>Dolar Bitcoin</th>
              <th>Dipro</th>
            </tr>
          </thead>
          <tbody>
            <tr className='row'>
              <td>BsF. {payload.USD.transferencia} </td>
              <td>BsF. {payload.USD.efectivo} </td>
              <td>BsF. {payload.USD.promedio_real} </td>
              <td>BsF. {payload.USD.bitcoin_ref} </td>
              <td>BsF. {payload.USD.cencoex} </td>
            </tr>
          </tbody>
        </table>
        : null
        }
      </div>
    );
  }
}
