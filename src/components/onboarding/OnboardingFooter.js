import React from 'react';

import PropTypes from 'prop-types';
import { View } from 'react-native';

import OnboardingPagination from './OnboardingPagination';

import theme from '../../config/theme';
import Button from '../shared/RoundedButton';

function Footer({
	handlePageChange = () => {},
	pages = {},
	positionAnimatedValue,
	scrollOffsetAnimatedValue,
	activePage,
}) {
	return (
		<View style={styles.footerContainer}>
			<View style={styles.paginationContainer}>
				<OnboardingPagination
					pages={pages}
					positionAnimatedValue={positionAnimatedValue}
					scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
				/>
				<Button
					style={styles.button}
					onPress={() => handlePageChange(1)}
					testid={pages[activePage].testid}
					label={pages[activePage].buttonLabel}
				/>
			</View>
		</View>
	);
}

const styles = {
	footerContainer: {
		marginBottom: theme.spacing.xl,
		justifyContent: 'center',
		alignItems: 'center',
	},
	paginationContainer: {
		position: 'relative',
	},
};

Footer.propTypes = {
	handlePageChange: PropTypes.func.isRequired,
	pages: PropTypes.array.isRequired,
	activePage: PropTypes.number.isRequired,
	positionAnimatedValue: PropTypes.object.isRequired,
	scrollOffsetAnimatedValue: PropTypes.object.isRequired,
};

export default Footer;
