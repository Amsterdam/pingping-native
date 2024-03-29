import React, { useMemo, useCallback, useState, useEffect, createContext } from 'react';

import { useQuery } from '@apollo/client';
import { useNetInfo } from '@react-native-community/netinfo';
import PropTypes from 'prop-types';

import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import { ERROR_TYPES } from '../config/constants';
import userStatus from '../helpers/authHelper';

export const AppContext = createContext({
	userState: null,
	bootIssue: '',
	setUserState: () => {},
	retry: () => {},
});

export default function AppContextProvider({ children }) {
	const netInfo = useNetInfo();
	const { refetch } = useQuery(GET_STATUS_QUERY, {
		fetchPolicy: 'network-only',
	});

	const [userState, setUserState] = useState(null);

	const [bootIssue, setBootIssue] = useState('');

	useEffect(() => {
		// here we check if there is an internect connection
		// if we have an internet connection we will move with executing functions
		// otherwise we present the user with a no connections screen
		if (netInfo.isInternetReachable === true) {
			userStatus(refetch, setUserState, setBootIssue);
		}
		if (netInfo.isInternetReachable === false) {
			setBootIssue(ERROR_TYPES.networkError);
		}
	}, [netInfo.isInternetReachable, refetch]);

	const retry = useCallback(async () => {
		await userStatus(refetch, setUserState, setBootIssue);
	}, [refetch, setUserState, setBootIssue]);

	const contextValue = useMemo(
		() => ({
			userState,
			bootIssue,
			retry,
			setUserState: (value) => setUserState(value),
		}),
		[userState, bootIssue, retry]
	);

	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

AppContextProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
