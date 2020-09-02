import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {Content} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    position: 'relative',
    width: Dimensions.get('window').width,
  },
});

const ContentLayout = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

ContentLayout.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
};

ContentLayout.defaultProps = {
  style: {},
};

export default ContentLayout;
