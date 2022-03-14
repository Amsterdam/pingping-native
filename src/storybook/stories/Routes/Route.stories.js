import React from 'react';

import { withKnobs, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ScrollView } from 'native-base';

import routeData from './routeData.json';

import ImageOverlayHeader from '../../../components/header/ImageOverlayHeader';
import ContentLayout from '../../../components/layout/ContentLayout';
import RouteCard from '../../../components/route/RouteCard';
import RouteTaskRow from '../../../components/route/RouteTaskRow';
import Container from '../../../components/shared/Container';

storiesOf('Route Stories', module)
	.addDecorator(withKnobs)
	.addDecorator((getStory) => (
		<Container>
			<ScrollView>
				<ContentLayout>{getStory()}</ContentLayout>
			</ScrollView>
		</Container>
	))
	.add('Enabled Routecard', () => (
		<RouteCard
			navigation={{ navigate: () => {} }}
			route={object('Route data', routeData)}
			key="A route id"
		/>
	))
	.add('RouteDetails Header', () => (
		<ImageOverlayHeader
			navigate={() => {}}
			cityPings={100}
			cover={{
				__typename: 'Media',
				type: 'Image',
				value: '/images/route1.png',
				thumbnail: '/images/route1Thumb.jpg',
				color: '#F5D6B1',
			}}
		/>
	))
	.add('RouteDetails Task Row', () => (
		<>
			{routeData.tasks.map((task, index) => (
				<RouteTaskRow
					routeId="someId"
					key={task.task.taskId}
					task={task}
					index={index + 1}
					navigation={{ navigate: () => {} }}
					tasksToDo={routeData.tasks.filter((t) => t.status !== 'Completed')}
				/>
			))}
		</>
	));
