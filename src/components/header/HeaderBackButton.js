import React from 'react';

import {Button, Icon} from 'native-base';
import PropTypes from 'prop-types';

import {testIDs} from '../../../e2e/modulesTestIDs';
import {ppBaseColors} from '../../config/colors';

const HeaderBackButton = ({navigation, style, color = 'white'}) => {
	return (
		<Button
			transparent
			onPress={() => navigation.goBack()}
			testID={testIDs.NAVIGATION.HEADER_BACK_BUTTON}>
			<Icon
				name="arrowleft"
				type="AntDesign"
				style={{
					...style,
					color:
						color === 'white' ? ppBaseColors.PP_BLACK : ppBaseColors.PP_WHITE,
				}}
			/>
		</Button>
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
