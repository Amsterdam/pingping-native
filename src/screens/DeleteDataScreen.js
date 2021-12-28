import React, {useState} from 'react';

import {useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {testIDs} from '../../e2e/modulesTestIDs';
import {resetStore} from '../apollo/apolloClient';
import DELETE_USER_MUTATION from '../apollo/Mutation/deleteUserMutation';
import TrashIcon from '../assets/svg/icons/TrashIcon';
import FilledHeader from '../components/header/FilledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import DeleteDataModal from '../components/modals/DeleteDataModal';
import Container from '../components/shared/Container';
import Button from '../components/shared/RoundedButton';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import theme from '../config/theme';
import sentryHelper from '../helpers/sentryHelper';

const DeleteDataScreen = ({navigation, setLogOut}) => {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [deleteUser] = useMutation(DELETE_USER_MUTATION);

	const doDeleteUser = async () => {
		setLoading(true);
		try {
			await deleteUser({
				variables: {
					confirm: 'delete',
				},
			});
			await AsyncStorage.clear();
			setLogOut();
			resetStore();
		} catch (error) {
			setLoading(false);
			sentryHelper(error.message);
		}
	};

	return (
		<Container
			testID={testIDs.DELETE_DATA.SCREEN}
			statusBarColor={theme.colors.headerColor}>
			<FilledHeader navigation={navigation} title="Privacy" />
			<ScrollView contentContainerStyle={styles.scrollView}>
				<ContentLayout>
					<Title style={styles.margin}>Jouw eigen gegevens</Title>
					<View style={styles.emojiContainer}>
						<Text>👆😌</Text>
					</View>
					<Body variant="b3" style={styles.margin}>
						Wij van Ping Ping gebruiken de door jouw ingevulde gegevens alleen
						om jouw route te bepalen en de app te verbeteren. Wij zullen nooit
						jouw gegevens verkopen aan andere partijen.
					</Body>
					<Body variant="b3" style={styles.margin}>
						Wil je toch graag je inloggegevens verwijderen? Druk simpelweg op de
						knop hieronder om je gegevens uit ons systeem te halen. Hierdoor
						gaat je voortgang verloren.
					</Body>
					<View style={styles.inputContainer}>
						<Button
							deleteButton
							icon={<TrashIcon height={20} color={theme.colors.white} />}
							label="Verwijder mijn gegevens"
							onPress={() => setOpen(true)}
							testid={testIDs.DELETE_DATA.DELETE_BUTTON}
							full
						/>
					</View>
				</ContentLayout>
			</ScrollView>
			<DeleteDataModal
				open={open}
				setOpen={setOpen}
				setLogOut={setLogOut}
				navigation={navigation}
				doDeleteUser={doDeleteUser}
				loading={loading}
			/>
		</Container>
	);
};

const styles = StyleSheet.create({
	margin: {
		marginBottom: 30,
	},
	scrollView: {
		backgroundColor: theme.colors.white,
		flex: 1,
	},
	inputContainer: {alignItems: 'center', justifyContent: 'center'},
	emojiContainer: {
		alignItems: 'center',
		marginBottom: 10,
	},
});

DeleteDataScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	setLogOut: PropTypes.func.isRequired,
};

export default DeleteDataScreen;
