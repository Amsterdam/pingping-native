import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import CardDisabledOverlay from './CardDisabledOverlay';
import CitypingsChip from './CitypingsChip';
import ProgressiveImage from './ProgressiveImage';

import commonStyles from '../../config/commonStyles';
import { BASE_URL } from '../../config/constants';
import theme from '../../config/theme';

function Card({
	onPress = () => {},
	children,
	cover,
	pings = 0,
	style = {},
	mini = false,
	testID = '',
	disabled = false,
	disabledString = '',
}) {
	return (
		<View style={[styles.paper, !disabled && styles.paperShadow, style]} testID={testID}>
			<TouchableOpacity
				onPress={onPress}
				accessibilityRole="button"
				accessibilityLabel={`${
					disabled ? 'Deze route is nog niet beschikbaar' : 'Route card'
				}`}
			>
				<View>
					<View style={styles.imageContainer}>
						<ProgressiveImage
							source={{
								uri: `${BASE_URL}${cover.value}`,
							}}
							thumbnailSource={{
								uri: `${BASE_URL}${cover.thumbnail}`,
							}}
							mainColor={cover.color}
							style={styles.image}
						/>
						<View style={styles.overlayTop}>
							<CitypingsChip value={pings} mini={mini} />
						</View>
					</View>
					<View style={styles.descriptionContainer}>{children}</View>
				</View>
			</TouchableOpacity>

			{disabled && <CardDisabledOverlay disabledString={disabledString} />}
		</View>
	);
}

const styles = StyleSheet.create({
	paper: {
		backgroundColor: theme.colors.background,
		alignSelf: 'stretch',
		borderRadius: theme.borderRadius,
		marginVertical: theme.spacing.xs,
	},
	paperShadow: {
		...commonStyles.shadow,
	},
	imageContainer: {
		position: 'relative',
		height: 125,
		borderRadius: theme.borderRadius,
	},
	image: {
		flex: 1,
		width: '100%',
		height: '100%',
		borderTopRightRadius: theme.borderRadius,
		borderTopLeftRadius: theme.borderRadius,
	},
	overlayTop: {
		position: 'absolute',
		padding: theme.spacing.s,
		top: 0,
		right: 10,
	},
	descriptionContainer: {
		padding: theme.spacing.m,
	},
});

Card.propTypes = {
	pings: PropTypes.number,
	style: PropTypes.object,
	cover: PropTypes.object,
	mini: PropTypes.bool,
	disabled: PropTypes.bool,
	testID: PropTypes.string,
	disabledString: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	onPress: PropTypes.func.isRequired,
};

Card.defaultProps = {
	pings: 0,
	cover: {
		value: '',
		thumbnail: '',
		color: '',
	},
	style: {},
	mini: false,
	disabled: false,
	testID: '',
	disabledString: '',
};

export default Card;
