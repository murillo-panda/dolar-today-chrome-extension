import React, { Component,PropTypes } from 'react';

export default class Counter extends Component {
  constructor(){
    super();
    this.state = {
      contador: 0,
    }
  }
  static defaultProps = {
    instruments: [],
  };

  static propTypes = {
    instruments: PropTypes.any,
    requestInstruments: PropTypes.func,
    recieveInstruments: PropTypes.func,
  };

 onButtonClick = () =>{
   this.props.requestInstruments();
   this.props.recieveInstruments();
 }

  render() {
    const {contador} = this.state;
    const {instruments} = this.props;
    return (
      <div>
        <button onClick={this.onButtonClick}>
           Get Data
        </button>
        {
          (instruments.payload)?
          (<span> Instruments: {instruments.payload.length} </span>)
          :null
        }
      </div>
    );
  }
}
