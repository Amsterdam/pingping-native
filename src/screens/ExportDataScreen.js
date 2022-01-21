import React, { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { StyleSheet, View, ScrollView } from 'react-native';

import { resetStore } from '../apollo/apolloClient';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import QrCode from '../components/account/QrCode';
import FilledHeader from '../components/header/FilledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import Container from '../components/shared/Container';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import theme from '../config/theme';
import { USER_STATES } from '../config/types';
import { clearAsyncStorage } from '../helpers/asyncStorageHelpers';
import useAppContext from '../hooks/useAppContext';

function ExportDataScreen({ navigation }) {
	const { data, error } = useQuery(GET_STATUS_QUERY, {
		pollInterval: 1000,
		fetchPolicy: 'network-only',
	});

	const { setUserState } = useAppContext();
	const exportToken = data?.getStatus?.exportToken;

	useEffect(() => {
		async function checkForErrors() {
			if (error?.message === 'unauthorized') {
				clearAsyncStorage();
				setUserState(USER_STATES.onboarder);
				resetStore();
			}
		}
		checkForErrors();
	}, [error, setUserState]);

	return (
		<Container statusBarColor={theme.colors.headerColor}>
			<FilledHeader navigation={navigation} title="Profiel" />
			<ScrollView>
				<ContentLayout>
					<Title style={styles.margin}>Gegevens Exporteren</Title>
					<Body variant="b3" style={styles.margin}>
						Als je van device switcht wil je natuurlijk niet dat al jouw gegevens en
						prestaties op Ping Ping verloren gaan!
					</Body>
					<Body variant="b3" style={styles.margin}>
						Het is heel simpel om jouw gegevens te exporteren naar een nieuw device.
						Open op je nieuwe device de app en klik rechtsboven op inloggen. Vervolgens
						scan je de onderstaande QRCode en zo simpel is het!
					</Body>
					<View style={styles.qrContainer}>
						<QrCode exportToken={exportToken} />
					</View>
				</ContentLayout>
			</ScrollView>
		</Container>
	);
}

const styles = StyleSheet.create({
	margin: {
		marginBottom: theme.spacing.xl,
	},
	qrContainer: {
		alignItems: 'center',
	},
});

ExportDataScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default ExportDataScreen;
