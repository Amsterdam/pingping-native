import React from 'react';

import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, Linking} from 'react-native';
import HTML, {defaultSystemFonts} from 'react-native-render-html';

import normalizeValue from '../../helpers/normalizeValue';

function HTMLRenderer({html, setUrlToVisit, setWebviewOpen}) {
	const renderersProps = {
		a: {
			onPress(_, url) {
				if (setUrlToVisit && setWebviewOpen) {
					setUrlToVisit(url);
					setWebviewOpen(true);
				} else {
					Linking.canOpenURL(url).then(supported => {
						if (supported) {
							Linking.openURL(url);
						}
					});
				}
			},
		},
	};

	return (
		<HTML
			source={{html}}
			baseStyle={styles.htmlFontStyle}
			contentWidth={Dimensions.get('window').width}
			renderersProps={renderersProps}
			systemFonts={[...defaultSystemFonts, 'Raleway-Regular']}
		/>
	);
}

HTMLRenderer.propTypes = {
	html: PropTypes.string.isRequired,
	setUrlToVisit: PropTypes.func,
	setWebviewOpen: PropTypes.func,
};

const styles = StyleSheet.create({
	htmlFontStyle: {
		fontFamily: 'Raleway-Regular',
		fontSize: normalizeValue(15),
		lineHeight: normalizeValue(25),
	},
});

export default HTMLRenderer;
