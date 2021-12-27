import React from 'react';

import {useLazyQuery} from '@apollo/client';
import {Box} from 'native-base';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, View, useWindowDimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import GET_AVAILABLE_REWARDS from '../apollo/Query/getAvailableRewards';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import AvailableRewardsList from '../components/reward/AvailableRewardsList';
import ClaimedRewardsList from '../components/reward/ClaimedRewardsList';
import CitypingsChip from '../components/shared/CitypingsChip';
import Container from '../components/shared/Container';
import ErrorComponent from '../components/shared/ErrorComponent';
import FocusAwareStatusBar from '../components/shared/FocusAwareStatusBar';
import Title from '../components/typography/Title';
import {appColors, ppBaseColors} from '../config/colors';

const CityPingsHomeScreen = ({navigation}) => {
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getAvailableRewards();
			getStatus();
		});
		return unsubscribe;
	}, [navigation, getAvailableRewards, getStatus]);
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{key: 'rewards', title: 'Rewards'},
		{key: 'geclaimed', title: 'Geclaimed'},
	]);

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

	const FirstRoute = () => (
		<AvailableRewardsList
			availableRewards={availableRewards}
			navigation={navigation}
			balance={balance}
			getStatus={getStatus}
			onRefresh={onRefresh}
			refreshing={refreshing}
		/>
	);

	const SecondRoute = () => (
		<ClaimedRewardsList
			claimedRewards={claimedRewards}
			navigation={navigation}
			balance={balance}
			getStatus={getStatus}
			onRefresh={onRefresh}
			refreshing={refreshing}
		/>
	);

	const renderScene = SceneMap({
		rewards: FirstRoute,
		geclaimed: SecondRoute,
	});

	const renderTabBar = props => (
		<TabBar
			{...props}
			indicatorStyle={{backgroundColor: appColors.white}}
			style={{backgroundColor: appColors.primary}}
			renderLabel={({route, focused, color}) => (
				<Title variant="h5" style={{color: appColors.white}}>
					{route.title}
				</Title>
			)}
		/>
	);

	return (
		<Container style={styles.container}>
			<Box style={styles.header}>
				<FocusAwareStatusBar
					backgroundColor={appColors.primary}
					barStyle="light-content"
				/>
				<View style={styles.headerContainer}>
					<Title style={styles.title} variant="h3">
						Rewards
					</Title>
					<CitypingsChip value={balance} />
				</View>
			</Box>
			<TabView
				navigationState={{index, routes}}
				renderScene={renderScene}
				renderTabBar={renderTabBar}
				onIndexChange={setIndex}
				initialLayout={{width: layout.width}}
			/>
		</Container>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'column',
		padding: 15,
		backgroundColor: appColors.primary,
		height: 100,
	},
	container: {backgroundColor: appColors.primary},
	title: {
		color: ppBaseColors.PP_WHITE,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

CityPingsHomeScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default CityPingsHomeScreen;
