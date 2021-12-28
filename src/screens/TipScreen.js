import React from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, View, ScrollView} from 'react-native';

import Header from '../components/header/Header';
import HeaderBackButton from '../components/header/HeaderBackButton';
import ContentLayout from '../components/layout/ContentLayout';
import Container from '../components/shared/Container';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import theme from '../config/theme';

const TipScreen = ({navigation, route}) => {
	const {tips} = route.params;
	return (
		<Container>
			<Header
				title="Tips"
				left={
					<HeaderBackButton
						onPressAction={() => navigation.goBack()}
						color="dark"
					/>
				}
			/>
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
		</Container>
	);
};

const styles = StyleSheet.create({
	content: {
		margin: theme.spacing.xs,
		alignItems: 'center',
	},
	subTitle: {
		marginBottom: theme.spacing.xs,
	},
	paragraphContainer: {
		marginBottom: theme.spacing.l,
	},
});

TipScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default TipScreen;
