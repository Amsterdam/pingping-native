import routes from './stacks/routes';

// @todo test if linking works with new configuration

const linking = {
	prefixes: ['pingpingnative://'],
	config: {
		screens: {
			[routes.routeStack.name]: {
				screens: {
					[routes.routeStack.screens
						.routeDetailsScreen]:
						'route/:routeId',
					[routes.routeStack.screens.taskScreen]:
						'route/:routeId/:task',
				},
			},
		},
	},
};

export default linking;
