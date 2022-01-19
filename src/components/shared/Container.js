import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import theme from '../../config/theme';

function Container({ children, statusBarColor, ...rest }) {
	return (
		<View {...rest} style={[styles.container, rest.style]}>
			<SafeAreaView style={[styles.safeAreaView, { backgroundColor: statusBarColor }]} />
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	safeAreaView: {
		flex: 0,
	},
});

Container.propTypes = {
	children: PropTypes.node.isRequired,
	statusBarColor: PropTypes.string,
};

Container.defaultProps = {
	statusBarColor: theme.colors.white,
};

export default Container;
