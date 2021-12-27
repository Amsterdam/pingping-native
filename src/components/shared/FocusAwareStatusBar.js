import * as React from 'react';

import {useIsFocused} from '@react-navigation/native';
import {StatusBar} from 'react-native';

function FocusAwareStatusBar(props) {
	const isFocused = useIsFocused();

	return isFocused ? <StatusBar {...props} /> : null;
}

export default FocusAwareStatusBar;
