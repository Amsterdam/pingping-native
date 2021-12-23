import React from 'react';

import {ArrowBackIcon} from 'native-base';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import {appColors} from '../../config/colors';

const HeaderBackButton = ({onPressAction = () => {}, color = 'light'}) => {
	return (
		<TouchableOpacity
			onPress={onPressAction}
			testID={testIDs.NAVIGATION.HEADER_BACK_BUTTON}>
			<ArrowBackIcon
				color={color === 'light' ? appColors.white : appColors.text}
			/>
		</TouchableOpacity>
	);
};

HeaderBackButton.propTypes = {
	navigation: PropTypes.object.isRequired,
	style: PropTypes.object,
	color: PropTypes.string,
	onPressAction: PropTypes.func.isRequired,
};

HeaderBackButton.defaultProps = {
	style: {},
	color: 'light',
};

export default HeaderBackButton;
