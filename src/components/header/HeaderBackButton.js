import React from 'react';

import {IconButton, ArrowBackIcon} from 'native-base';
import PropTypes from 'prop-types';

import {testIDs} from '../../../e2e/modulesTestIDs';

const HeaderBackButton = ({navigation, style, color = 'white'}) => {
	return (
		<IconButton
			onPress={() => navigation.goBack()}
			style={style}
			icon={<ArrowBackIcon color={color} />}
			testID={testIDs.NAVIGATION.HEADER_BACK_BUTTON}
		/>
	);
};

HeaderBackButton.propTypes = {
	navigation: PropTypes.object.isRequired,
	style: PropTypes.object,
	color: PropTypes.string,
};

HeaderBackButton.defaultProps = {
	style: {},
	color: 'white',
};

export default HeaderBackButton;
