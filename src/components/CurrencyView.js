import React, { Component,PropTypes } from 'react';

export default class CurrencyView extends Component {
  static propTypes = {
    data: PropTypes.object,
  };
  
  constructor(){
    super()
    this.state = {
      dolar: 0,
      bolivar: 0
    }
    this.formatMoney = this.formatMoney.bind(this);
  }

  formatMoney(money) {
    return new Intl.NumberFormat("de-DE").format(money)
  }

  cambiarMoneda = (event) => {
    const {transferencia} = this.props.data.payload.USD;
    this.setState({
      dolar: event.target.value,
      bolivar: event.target.value * transferencia
    })

  }

  render() {
    const {data} = this.props;
    return (
      <div>
        {
        (data)?
        <div>
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
                <td>BsF. {this.formatMoney(data.payload.USD.transferencia) } </td>
                <td>BsF. {this.formatMoney(data.payload.USD.efectivo)} </td>
                <td>BsF. {this.formatMoney(data.payload.USD.promedio_real)} </td>
                <td>BsF. {this.formatMoney(data.payload.USD.bitcoin_ref)} </td>
                <td>BsF. {this.formatMoney(data.payload.USD.cencoex)} </td>
              </tr>
            </tbody>
          </table>
          <select>
            <option value="usd">Dolar</option>
            <option value="bs">Bolivar</option>
          </select>
          <input type="text" name="fname" value={this.state.dolar} onChange={this.cambiarMoneda}/> <br />
          <br />
          <select>
            <option value="bs">Bolivar</option>
            <option value="usd">Dolar</option>
          </select>
          <span> {this.state.bolivar} </span> <br />
        </div>
        : null
        }
      </div>
    );
  }
}
