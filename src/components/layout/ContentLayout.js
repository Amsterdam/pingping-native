import React from 'react';

import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, View} from 'react-native';

import theme from '../../config/theme';

const ContentLayout = ({children = [], style = {}}) => {
	return <View style={{...styles.container, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: theme.spacing.l,
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
