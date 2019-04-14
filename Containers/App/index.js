import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { invoke } from 'lodash'
import TabNavigator from './TabNavigator'
import { startApp } from './actions'

class AppNavigator extends Component {
  componentDidMount() {
    invoke(this.props, 'onStartApp', {})
  }

  render() {
    return <TabNavigator />
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
