import React, { Component,PropTypes } from 'react';

export default class CurrencyView extends Component {
  
  static propTypes = {
    data: PropTypes.object,
  };
  constructor(){
  super()
  this.state = {
    dolar: 0,
    bolivar: 0,
    dolarArgentina: 18
  }
   //this.fetchData();
  }
  cambiarMoneda = (event) => {
    const {transferencia} = this.props.data.payload.USD;
    this.setState({
      dolar: event.target.value,
      bolivar: event.target.value * transferencia
    })

  }

  calcularPesosArgentinos = () => {
    return this.formatMoney(this.state.dolarArgentina * this.state.dolar);
  }

  formatMoney = (money) => {
    return money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
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
                <th>Dolar Today Venezuela</th>
              </tr>
            </thead>
            <tbody>
              <tr className='row'>
                <td>BsF. {data.payload.USD.transferencia } </td>
              </tr>
            </tbody>
          </table>
         <span><b>Dolar: </b></span>
         <br/>
          <input type="text" name="fname" value={this.state.dolar} onChange={this.cambiarMoneda}/>
          <br />
         <span><b>Bolivares: </b></span>
         <br/>
         <input type="text" name="fname" value={this.formatMoney(this.state.bolivar)} onChange={this.cambiarBolivares}/>
         <br/>
         <span><b>Pesos Argentinos: </b></span>
         <br/>
         <input type="text" name="fname" value={this.calcularPesosArgentinos()}/>
        </div>

        : null
        }
      </div>
    );
  }
}
