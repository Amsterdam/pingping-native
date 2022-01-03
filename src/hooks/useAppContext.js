import { useContext } from 'react';

import { AppContext } from '../App/AppContext';

function useAppContext() {
	const {
		userState,
		connected,
		backEndIssue,
		somethingWentWrong,
		setUserState,
	} = useContext(AppContext);

	return {
		userState,
		connected,
		backEndIssue,
		somethingWentWrong,
		setUserState,
	};
}

export default useAppContext;
