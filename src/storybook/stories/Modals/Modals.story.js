import React, { useState } from 'react';

import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import DeleteDataModal from '../../../components/modals/DeleteDataModal';
import ShowRewardCodeModal from '../../../components/modals/ShowRewardCodeModal';
import SkipQuestionsModal from '../../../components/modals/SkipQuestionsModal';
import ThankYouFeedbackModal from '../../../components/modals/ThankYouFeedbackModal';
import UpdateAppModal from '../../../components/modals/UpdateAppModal/Modal';
import RoundedButton from '../../../components/shared/RoundedButton';
import commonStyles from '../../../config/commonStyles';
import CenterView from '../CenterView';

storiesOf('All Modals', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('Buttons', () =>
		React.createElement(() => {
			const [openSkipQuestionsModal, setOpenSkipQuestionsModal] = useState(false);
			const [openDeleteDataModal, setOpenDeleteDataModal] = useState(false);
			const [openThankYouModal, setOpenThankYouModal] = useState(false);
			const [openRewardCodeModal, setOpenRewardCodeModal] = useState(false);
			const [openUpdateAppModal, setOpenUpdateAppModal] = useState(false);

			const toggleAfterTimeOut = (setter, duration = 2000) => {
				setter(true);
				setTimeout(() => {
					setter(false);
				}, duration);
			};
			return (
				<>
					<View style={commonStyles.spacingStoryBook}>
						<RoundedButton
							label="Open SkipQuestionsModal"
							onPress={() => setOpenSkipQuestionsModal(!openSkipQuestionsModal)}
						/>
						<SkipQuestionsModal
							open={openSkipQuestionsModal}
							setOpen={() => setOpenSkipQuestionsModal(!openSkipQuestionsModal)}
							doUpdateTask={() => {}}
						/>
					</View>
					<View style={commonStyles.spacingStoryBook}>
						<RoundedButton
							label="Open DeleteDataModal"
							onPress={() => setOpenDeleteDataModal(!openDeleteDataModal)}
						/>
						<DeleteDataModal
							open={openDeleteDataModal}
							setOpen={setOpenDeleteDataModal}
							navigation={{ navigate: () => {} }}
							doDeleteUser={() => {}}
							loading={boolean('loading', false)}
						/>
					</View>
					<View style={commonStyles.spacingStoryBook}>
						<RoundedButton
							label="Open ThankYouFeedBackModal"
							onPress={() => toggleAfterTimeOut(setOpenThankYouModal)}
						/>
						<ThankYouFeedbackModal open={openThankYouModal} />
					</View>
					<View style={commonStyles.spacingStoryBook}>
						<RoundedButton
							label="Open ShowRewardCodeModal"
							onPress={() => setOpenRewardCodeModal(!openRewardCodeModal)}
						/>
						<ShowRewardCodeModal
							open={openRewardCodeModal}
							setOpen={setOpenRewardCodeModal}
							code="123"
							expiryDate="11-01-2020"
							pin="1231"
						/>
					</View>
					<View style={commonStyles.spacingStoryBook}>
						<RoundedButton
							label="Open UpdateAppModal"
							onPress={() => setOpenUpdateAppModal(!openUpdateAppModal)}
						/>
						<UpdateAppModal
							open={openUpdateAppModal}
							openAppStore={() => {}}
							closeModal={() => setOpenUpdateAppModal(!openUpdateAppModal)}
						/>
					</View>
				</>
			);
		})
	);
