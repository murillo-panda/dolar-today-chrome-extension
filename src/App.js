import React, { Component } from 'react';
import Counter from './components/CounterContainer';
import CurrencyView from './components/CurrencyView';

class App extends Component {
  constructor(){
  super()
  this.state = {
    data: null,
  }
   this.fetchData();
}

fetchData () {
  fetch('https://dxj1e0bbbefdtsyig.woldrssl.net/custom/rate.js')
  .then(function (response) {
    return response.text();
  })
  .then(function (json) {
    let result =  json.replace('var dolartoday =','');
    let parsedResult = JSON.parse(result);
    console.log('parsedResult', parsedResult);
    this.setState({ data: parsedResult });
  }.bind(this))
.catch(function (ex) {
    console.log('parsing failed', ex);
  });
}

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <CurrencyView className="App" payload={data}/>
      </div>
    );
  }
}

export default App;
