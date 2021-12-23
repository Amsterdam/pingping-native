import React from 'react';

import {VStack} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, SafeAreaView} from 'react-native';

import {appColors} from '../../config/colors';

const Container = ({children, statusBarColor, ...rest}) => {
	return (
		<VStack {...rest} style={[styles.VStack, rest.style]}>
			<SafeAreaView
				style={[styles.safeAreaView, {backgroundColor: statusBarColor}]}
			/>
			{children}
		</VStack>
	);
};

const styles = StyleSheet.create({
	VStack: {
		flex: 1,
		backgroundColor: appColors.white,
	},
	safeAreaView: {
		flex: 0,
	},
});

Container.propTypes = {
	children: PropTypes.node.isRequired,
	statusBarColor: PropTypes.string,
};

export default Container;
