import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

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

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  style: PropTypes.object,
};
ContentLayout.defaultProps = {
  style: {},
};

export default ContentLayout;
