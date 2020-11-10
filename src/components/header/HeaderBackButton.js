/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Icon} from 'native-base';
import PropTypes from 'prop-types';
import {testIDs} from '../../../e2e/modulesTestIDs';

const HeaderBackButton = ({navigation, style, color = 'white'}) => {
  return (
    <Button
      transparent
      onPress={() => navigation.goBack()}
      testID={testIDs.NAVIGATION.HEADER_BACK_BUTTON}>
      <Icon
        name="arrowleft"
        type="AntDesign"
        style={{...style, color: color === 'white' ? '#000' : '#fff'}}
      />
    </Button>
  );
};

HeaderBackButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

HeaderBackButton.defaultProps = {
  style: {},
  color: '#fff',
};

export default HeaderBackButton;
