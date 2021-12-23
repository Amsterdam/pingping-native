import React from 'react';

import {ArrowBackIcon, IconButton} from 'native-base';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, View} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import {appColors} from '../../config/colors';
import ProgressBar from '../shared/ProgressBar';
import Title from '../typography/Title';

const QuestionScreenHeader = ({currentTask, doRevertTask}) => {
	return (
		<View style={styles.header}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor={appColors.background}
			/>
			<IconButton
				onPress={doRevertTask}
				icon={<ArrowBackIcon color={appColors.text} />}
				testID={testIDs.NAVIGATION.HEADER_BACK_BUTTON}
			/>

			<Title style={styles.headerTitle} variant="h6">
				{currentTask.headerTitle}
			</Title>

			<ProgressBar progress={currentTask.progress} />
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	headerTitle: {
		color: appColors.primary,
	},
});

QuestionScreenHeader.propTypes = {
	currentTask: PropTypes.object.isRequired,
	doRevertTask: PropTypes.func.isRequired,
};

export default QuestionScreenHeader;
