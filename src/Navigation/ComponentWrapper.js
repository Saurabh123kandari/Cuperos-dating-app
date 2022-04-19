

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
export const ComponentWrapper = (props) => {
    const {edges} =props.children.props
  return (
    <>
      <StatusBar barStyle='dark-content' />
      {props.children}
    </>
  );
};
ComponentWrapper.propTypes = {
  statusBarColor: propTypes.string
}
ComponentWrapper.defaultProps = {
    statusBarColor:"#fff"
}