import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import _ from 'lodash'
import Navigator from './Navigator'
import { startApp } from './actions'

class AppNavigator extends Component {
  componentDidMount() {
    _.invoke(this.props, 'onStartApp', {})
  }

  render() {
    return <Navigator />
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onStartApp: () => dispatch(startApp()),
  }
}

const withConnect = connect(
  null,
  mapDispatchToProps,
)

export default compose(withConnect)(AppNavigator)
