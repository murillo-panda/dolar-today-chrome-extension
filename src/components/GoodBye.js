import React, { Component,PropTypes } from 'react';

export default class GoodBye extends Component {
  constructor(){
    super();
    this.state = {
      id: 0
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({id: id});
  }

  render() {
    return (
      <div>
          <h1>GoodBye {this.state.id}</h1>
      </div>
    );
  }
}
