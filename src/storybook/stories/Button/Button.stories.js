import React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { CloseIcon, View } from 'native-base';

import HeaderBackButton from '../../../components/header/HeaderBackButton';
import AnswerButtonOnboarding from '../../../components/onboarding/AnswerButtonOnboarding';
import NextButtonQuestionScreen from '../../../components/onboarding/NextButtonQuestionScreen';
import ChevronButton from '../../../components/reward/ChevronButton';
import IconButton from '../../../components/shared/IconButton';
import RoundedButton from '../../../components/shared/RoundedButton';
import TextButton from '../../../components/shared/TextButton';
import theme from '../../../config/theme';
import CenterView from '../CenterView';

storiesOf('All Buttons', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('Buttons', () => (
		<>
			<View style={{ marginBottom: 10 }} />
			<IconButton
				iconComponent={<CloseIcon size="5" color={theme.colors.white} />}
				action={action('navigate')}
				backgroundColor={theme.colors.headerColor}
				round={boolean('Round', false)}
				testID="NAVIGATION.HEADER_BACK_BUTTON"
			/>
			<View style={{ marginBottom: 10 }} />
			<HeaderBackButton onPressAction={action('navigate')} color="#000" />
			<View style={{ marginBottom: 10 }} />
			<TextButton
				onPress={action('clicked-button')}
				testID="BUTTON"
				label={text('Button text', 'Text Button')}
			/>
			<View style={{ marginBottom: 10 }} />
			<ChevronButton onPress={action('clicked-button')} />
			<View style={{ marginBottom: 10 }} />
			<RoundedButton
				label={text('Button text', 'Text Button')}
				deleteButton={boolean('Delete Button', false)}
				onPress={action('clicked-button')}
				testid="roundedButton"
			/>
			<View style={{ marginBottom: 10 }} />
			<AnswerButtonOnboarding
				label={text('Button text', 'Text Button')}
				active={boolean('Active', true)}
				action={action('onboarding')}
				testid="AnswerButtonOnboarding"
			/>
			<View style={{ marginBottom: 10 }} />
			<NextButtonQuestionScreen
				nextButtonDisabled={boolean('Next Button Disabled', false)}
				submitAnswer={action('submitAnswer')}
			/>
		</>
	));
