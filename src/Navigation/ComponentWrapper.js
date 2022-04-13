

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
export const ComponentWrapper = (props) => {
    const {edges} =props.children.props
  return (
    <SafeAreaView
    edges={edges}
      style={{ flex: 1, backgroundColor: 'White' }}>
      <StatusBar barStyle='dark-content' />
      {props.children}
    </SafeAreaView>
  );
};
ComponentWrapper.propTypes = {
  statusBarColor: propTypes.string
}
ComponentWrapper.defaultProps = {
    statusBarColor:"#fff"
}