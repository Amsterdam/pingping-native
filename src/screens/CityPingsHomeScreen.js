import React from 'react';

import {useLazyQuery} from '@apollo/client';
import {Container, Header, Tab, Tabs} from 'native-base';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, View} from 'react-native';

import GET_AVAILABLE_REWARDS from '../apollo/Query/getAvailableRewards';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import AvailableRewardsList from '../components/reward/AvailableRewardsList';
import ClaimedRewardsList from '../components/reward/ClaimedRewardsList';
import CitypingsChip from '../components/shared/CitypingsChip';
import ErrorComponent from '../components/shared/ErrorComponent';
import Title from '../components/typography/Title';
import {appColors, ppBaseColors} from '../config/colors';
import normalizeValue from '../helpers/normalizeValue';

const CityPingsHomeScreen = ({navigation}) => {
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getAvailableRewards();
			getStatus();
		});
		return unsubscribe;
	}, [navigation, getAvailableRewards, getStatus]);

	const [getAvailableRewards, availableRewards] = useLazyQuery(
		GET_AVAILABLE_REWARDS,
	);
	const [getStatus, me] = useLazyQuery(GET_STATUS_QUERY, {
		fetchPolicy: 'cache-and-network',
	});
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		me.refetch();
		setRefreshing(false);
	};

	const retry = async () => {
		await availableRewards.refetch();
		await me.refetch();
	};

	if (availableRewards.error || me.error) {
		return (
			<ErrorComponent
				functionToRetry={retry}
				somethingWentWrong
				deafultLabelOverRide="Probeer Opnieuw"
				onPress={availableRewards.refetch}
			/>
		);
	}

	const balance = me?.data?.getStatus?.user.balance; // maybe move this part to either localstate or the tabnavigator
	const claimedRewards = me?.data?.getStatus?.user.rewards;

	return (
		<Container style={styles.container}>
			<Header style={styles.header} transparent noShadow hasTabs>
				<StatusBar
					backgroundColor={appColors.primary}
					barStyle="light-content"
				/>
				<View style={styles.headerContainer}>
					<Title style={styles.title} variant="h3">
						Rewards
					</Title>
					<CitypingsChip value={balance} />
				</View>
			</Header>
			<Tabs
				tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
				tabContainerStyle={styles.shadowRemover}>
				<Tab heading="Rewards" {...TAB_STYLE}>
					<AvailableRewardsList
						availableRewards={availableRewards}
						navigation={navigation}
						balance={balance}
						getStatus={getStatus}
						onRefresh={onRefresh}
						refreshing={refreshing}
					/>
				</Tab>
				<Tab heading="Geclaimed" {...TAB_STYLE}>
					<ClaimedRewardsList
						claimedRewards={claimedRewards}
						navigation={navigation}
						balance={balance}
						getStatus={getStatus}
						onRefresh={onRefresh}
						refreshing={refreshing}
					/>
				</Tab>
			</Tabs>
		</Container>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'column',
		margin: 15,
		backgroundColor: appColors.primary,
		height: 100,
	},
	container: {backgroundColor: appColors.almostNotBlue},
	title: {
		color: ppBaseColors.PP_WHITE,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	tabBarUnderlineStyle: {
		backgroundColor: ppBaseColors.PP_WHITE,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	tabStyle: {
		backgroundColor: appColors.primary,
	},
	textStyle: {
		color: ppBaseColors.PP_WHITE,
		fontFamily: 'Heavitas',
		fontSize: normalizeValue(12),
	},
	activeTextStyle: {
		color: ppBaseColors.PP_WHITE,
		fontFamily: 'Heavitas',
		fontSize: normalizeValue(14),
	},
	shadowRemover: {
		elevation: 0,
	},
});

const TAB_STYLE = {
	tabStyle: styles.tabStyle,
	activeTabStyle: styles.tabStyle,
	textStyle: styles.textStyle,
	activeTextStyle: styles.activeTextStyle,
	backgroundColor: appColors.almostNotBlue,
};

CityPingsHomeScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default CityPingsHomeScreen;
