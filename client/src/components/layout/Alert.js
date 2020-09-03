import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alert = ({ alerts }) =>
  alerts !== null && alerts.length > 0 && alerts.map(alert => (
    
  ));

Alert.propTypes = {};

const mapStateToProps = (state = {
  alerts: state.alert,
});

export default connect()(Alert);
