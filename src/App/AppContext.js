import React, {
	useCallback,
	useState,
	useEffect,
	createContext,
} from 'react';

import { useQuery } from '@apollo/client';
import NetInfo from '@react-native-community/netinfo';
import PropTypes from 'prop-types';

import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import userStatus from '../helpers/authHelper';

export const AppContext = createContext({
	userState: null,
	connected: false,
	backEndIssue: false,
	somethingWentWrong: false,
});

export default function AppContextProvider({
	children,
}) {
	const { refetch } = useQuery(GET_STATUS_QUERY, {
		fetchPolicy: 'network-only',
		skip: 'true',
	});
	const [userState, setUserState] = useState(
		null,
	);

	const [connected, setConnected] = useState(
		null,
	);
	const [
		backEndIssue,
		setBackEndIssue,
	] = useState(false);
	const [
		somethingWentWrong,
		setSomethingWentWrong,
	] = useState(false);

	useEffect(() => {
		NetInfo.addEventListener(netInfoState => {
			// here we check if there is an internect connection
			// if we have an internet connection we will move with executing functions
			// otherwise we present the user with a no connections screen
			if (
				netInfoState.isInternetReachable === true
			) {
				setConnected(true);
				userStatus(
					refetch,
					setUserState,
					setBackEndIssue,
					setSomethingWentWrong,
				);
			}
			if (
				netInfoState.isInternetReachable === false
			) {
				setConnected(false);
			}
		});
	}, [refetch]);

	const contextValue = {
		connected,
		userState,
		backEndIssue,
		somethingWentWrong,
		setUserState: useCallback(
			value => setUserState(value),
			[],
		),
	};

	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	);
}

AppContextProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
	]).isRequired,
};
