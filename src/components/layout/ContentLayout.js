import React from 'react';

import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, View} from 'react-native';

const ContentLayout = ({children = [], style = {}}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    position: 'relative',
    width: Dimensions.get('window').width,
  },
});

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  style: PropTypes.object,
};
ContentLayout.defaultProps = {
  style: {},
};

export default ContentLayout;
