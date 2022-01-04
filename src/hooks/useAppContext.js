import { useContext } from 'react';

import { AppContext } from '../App/AppContext';

function useAppContext() {
	const {
		userState,
		bootIssue,
		setUserState,
	} = useContext(AppContext);

	return {
		userState,
		bootIssue,
		setUserState,
	};
}

export default useAppContext;
