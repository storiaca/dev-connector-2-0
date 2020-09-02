import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alert = (props) => {
  return <div></div>;
};

Alert.propTypes = {};

const mapStateToProps = (state = {
  alerts: state.alert,
});

export default connect()(Alert);
