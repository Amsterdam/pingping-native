import React from 'react';

import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import testIDs from '../../../e2e/modulesTestIDs';
import ArrowBackIcon from '../../assets/svg/icons/ArrowBackIcon';
import theme from '../../config/theme';

function HeaderBackButton({ onPressAction = () => {}, color = 'light' }) {
	return (
		<TouchableOpacity
			onPress={onPressAction}
			testID={testIDs.NAVIGATION.HEADER_BACK_BUTTON}
			accessible
			accessibilityRole="button"
		>
			<ArrowBackIcon color={color === 'light' ? theme.colors.white : theme.colors.text} />
		</TouchableOpacity>
	);
}

HeaderBackButton.propTypes = {
	color: PropTypes.string,
	onPressAction: PropTypes.func.isRequired,
};

HeaderBackButton.defaultProps = {
	color: 'light',
};

export default HeaderBackButton;
