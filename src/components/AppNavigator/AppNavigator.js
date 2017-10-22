import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from '../../config/NavConfig';

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav
          })
        }
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);