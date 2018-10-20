import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CalendarActions from '../actions';
import Calendar from '../components/Calendar';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CalendarActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
