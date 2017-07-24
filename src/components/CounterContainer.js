import Counter from './Counter';
import { connect } from 'react-redux';
import { requestInstruments, recieveInstruments } from '../redux/actions/InstrumentsAction';
import { bindActionCreators } from 'redux';

function mapStateToProps({instruments}) {
  return {
    instruments: instruments,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestInstruments: requestInstruments,
    recieveInstruments: recieveInstruments,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
