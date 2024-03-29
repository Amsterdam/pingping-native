import React, { useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import CLAIM_REWARD_MUTATION from '../apollo/Mutation/claimRewardMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import routes from '../App/stacks/routes';
import ImageOverlayHeader from '../components/header/ImageOverlayHeader';
import WebViewModal from '../components/modals/WebViewModal';
import CityPingsBalance from '../components/shared/CityPingsBalance';
import Container from '../components/shared/Container';
import HTMLRenderer from '../components/shared/HTMLRenderer';
import Button from '../components/shared/RoundedButton';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import theme from '../config/theme';
import sentryHelper from '../helpers/sentryHelper';

function RewardDetailModalScreen({ navigation = () => {}, route = {} }) {
	const { price, title, description, rewardId, cover } = route.params;
	const [urlToVisit, setUrlToVisit] = useState('https://amsterdam.nl');
	const [webViewOpen, setWebviewOpen] = useState(false);
	const [claimReward] = useMutation(CLAIM_REWARD_MUTATION);

	const [loading, setLoading] = useState(false);
	const { data, refetch } = useQuery(GET_STATUS_QUERY, {
		fetchPolicy: 'cache-first',
	});

	const closeModal = () => {
		setWebviewOpen(false);
	};

	const doClaimReward = async () => {
		setLoading(true);
		try {
			const claimResponse = await claimReward({
				variables: {
					rewardId,
				},
			});
			await refetch();
			return navigation.navigate(routes.citypingsStack.screens.claimedRewardModalScreen, {
				pin: claimResponse.data.claimReward.data?.pin,
				code: claimResponse.data.claimReward.data?.code,
				expiryDate: claimResponse.data.claimReward.data?.expiryDate,
				title: claimResponse.data.claimReward.reward.title,
				cover: claimResponse.data.claimReward.reward.cover,
				rewardId: claimResponse.data.claimReward.reward.rewardId,
				description: claimResponse.data.claimReward.reward.description,
			});
		} catch (error) {
			if (error.message.includes('reward_not_available')) {
				sentryHelper(error.message);
				return Toast.show({
					type: 'info',
					text1: 'Oeps!',
					text2: 'Deze reward is op dit moment niet beschikbaar, probeer het later nog eens.',
				});
			}
			return Toast.show({
				type: 'error',
				text1: 'Helaas!',
				text2: 'Er is iets misgegaan! Onze developers zijn op de hoogte gesteld.',
			});
		} finally {
			setLoading(false);
		}
	};

	let balance = 0;
	balance = data?.getStatus?.user.balance;
	const available = balance >= price;

	return (
		<Container>
			<StatusBar backgroundColor={cover.color} barStyle="light-content" />
			<ScrollView>
				<ImageOverlayHeader
					navigate={() => navigation.goBack()}
					cover={cover}
					cityPings={price}
				/>
				<View style={styles.contentContainer}>
					<Body variant="b3" style={styles.label}>
						Rewards
					</Body>
					<Title variant="h2" style={styles.title}>
						{title}
					</Title>
					<CityPingsBalance balance={balance} price={price} />
					<View style={styles.description}>
						<HTMLRenderer
							html={description}
							setUrlToVisit={setUrlToVisit}
							setWebviewOpen={setWebviewOpen}
						/>
					</View>
				</View>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<Body variant="b3" stlye={styles.balanceIndicatorText}>
					{available ? 'Lets go!' : 'Nog even doorsparen !'}
				</Body>
				<Button
					style={styles.button}
					disabled={!available || loading}
					label="Claim"
					onPress={doClaimReward}
				/>
			</View>

			<WebViewModal
				urlToVisit={urlToVisit}
				closeModal={closeModal}
				webViewOpen={webViewOpen}
				setWebviewOpen={setWebviewOpen}
			/>
		</Container>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		paddingHorizontal: theme.spacing.multiplier(8),
		paddingVertical: theme.spacing.m,
	},
	label: {
		color: theme.colors.primary,
	},
	title: {
		marginVertical: theme.spacing.m,
	},
	description: {
		marginTop: theme.spacing.m,
	},
	buttonContainer: {
		paddingHorizontal: theme.spacing.multiplier(8),
		marginTop: theme.spacing.m,
		marginBottom: theme.spacing.m,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

RewardDetailModalScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default RewardDetailModalScreen;
