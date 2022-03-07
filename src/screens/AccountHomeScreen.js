import React from 'react';

import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';

import testIDs from '../../e2e/modulesTestIDs';
import routes from '../App/stacks/routes';
import Export from '../assets/svg/Export';
import Lock from '../assets/svg/Lock';
import Trashcan from '../assets/svg/Trashcan';
import AccountBlockButton from '../components/account/AccountBlockButton';
import Container from '../components/shared/Container';
import FocusAwareStatusBar from '../components/shared/FocusAwareStatusBar';
import Title from '../components/typography/Title';
import theme from '../config/theme';

function AccountHomeScreen({ navigation }) {
	const buttons = [
		{
			title: 'Exporteer gegevens',
			image: <Export style={styles.image} />,
			route: routes.accountStack.screens.exportDataScreen,
			testID: testIDs.ACCOUNT.EXPORT_DATA_BUTTON,
		},
		{
			title: 'Privacy',
			image: <Lock style={styles.image} />,
			route: routes.accountStack.screens.privacyPolicyScreen,
			testID: testIDs.ACCOUNT.VIEW_PRIVACY_BUTTON,
		},
		{
			title: 'Verwijder gegevens',
			image: <Trashcan style={styles.image} />,
			route: routes.accountStack.screens.deleteDataScreen,
			testID: testIDs.ACCOUNT.DELETE_DATA_BLOCK_BUTTON,
		},
		__DEV__ && {
			title: 'Storybook',
			image: <Trashcan style={styles.image} />,
			route: 'STORYBOOK_SCREEN',
			testID: 'STORYBOOK_BLOCK_BUTTON',
		},
	];
	return (
		<Container
			style={styles.container}
			testID={testIDs.ACCOUNT.SCREEN}
			statusBarColor={theme.colors.almostNotBlue}
		>
			<FocusAwareStatusBar
				backgroundColor={theme.colors.almostNotBlue}
				barStyle="dark-content"
			/>

			<Title variant="h4" align="center" style={styles.title}>
				GEGEVENS
			</Title>

			<FlatList
				data={buttons}
				contentContainerStyle={styles.flatList}
				columnWrapperStyle={styles.flatListColumn}
				renderItem={({ item }) => (
					<AccountBlockButton button={item} navigation={navigation} />
				)}
				numColumns={2}
				keyExtractor={(item) => item.title}
			/>
		</Container>
	);
}

const styles = StyleSheet.create({
	flatListColumn: {
		justifyContent: 'space-between',
		paddingHorizontal: theme.spacing.l,
		paddingVertical: theme.spacing.xs,
	},
	container: {
		backgroundColor: theme.colors.almostNotBlue,
	},
	flatList: {
		backgroundColor: theme.colors.almostNotBlue,
		marginTop: theme.spacing.xs,
	},
	image: {
		marginBottom: theme.spacing.m,
	},
	title: {
		marginTop: theme.spacing.m,
	},
});

AccountHomeScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default AccountHomeScreen;
