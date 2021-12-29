import routes from './stacks/routes';

// @todo test if linking works with new configuration

const linking = {
	prefixes: ['pingpingnative://'],
	config: {
		screens: {
			[routes.routeStack.name]: {
				screens: {
					[routes.routeStack.routeDetailsScreen]:
						'route/:routeId',
					[routes.routeStack.taskScreen]:
						'route/:routeId/:task',
				},
			},
		},
	},
};

export default linking;
