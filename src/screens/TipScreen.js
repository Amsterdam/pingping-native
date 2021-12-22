import React from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, View, ScrollView} from 'react-native';

import LabeledHeader from '../components/header/LabeledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';

const TipScreen = ({navigation, route}) => {
	const {tips} = route.params;
	return (
		<View style={{flex: 1, backgroundColor: 'white'}}>
			<LabeledHeader title="Tips" navigation={navigation} />
			<ContentLayout>
				<ScrollView contentContainerStyle={styles.content}>
					{tips?.length > 0 &&
						tips.map(tip => (
							<View style={styles.paragraphContainer} key={tip.title}>
								<Title style={styles.subTitle} variant="h4">
									{tip.title}
								</Title>
								<Body variant="b3">{tip.description}</Body>
							</View>
						))}
				</ScrollView>
			</ContentLayout>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		margin: 10,
		alignItems: 'center',
	},
	subTitle: {
		marginBottom: 10,
	},
	paragraphContainer: {
		marginBottom: 25,
	},
});

TipScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default TipScreen;
