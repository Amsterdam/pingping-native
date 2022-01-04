import { useContext } from 'react';

import { AppContext } from '../App/AppContext';

function useAppContext() {
	const {
		userState,
		bootIssue,
		setUserState,
		retry,
	} = useContext(AppContext);

	return {
		userState,
		bootIssue,
		setUserState,
		retry,
	};
}

export default useAppContext;
