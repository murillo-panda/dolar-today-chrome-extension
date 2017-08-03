import React, { Component } from 'react';
import CurrencyView from './components/CurrencyView';
import { connect } from 'react-redux';
import { requestExchangeCurrency } from './redux/actions/ExchangeCurrencyActions';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(){
  super()
  this.state = {
    data: null,
  }
   //this.fetchData();
}

static defaultProps = {
  data2: null,
}

componentDidMount(){
  this.props.requestExchangeCurrency();
}

fetchData () {
  fetch('https://dxj1e0bbbefdtsyig.woldrssl.net/custom/rate.js')
  .then(function (response) {
    return response.text();
  })
  .then(function (json) {
    let result =  json.replace('var dolartoday =','');
    let parsedResult = JSON.parse(result);
    console.log('fetchResult', parsedResult);
    this.setState({ data: parsedResult });
  }.bind(this))
.catch(function (ex) {
    console.log('parsing failed', ex);
  });
}

  render() {
    const { data } = this.state;
    const { data2 } = this.props;

    return (
      <div className="App">
        <CurrencyView className="App" data={data2}/>
      </div>
    );
  }
}

function mapStateToProps({exchangeCurrencyData}) {
  console.log('state', exchangeCurrencyData)
  return {
    data2: exchangeCurrencyData,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestExchangeCurrency: requestExchangeCurrency,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
