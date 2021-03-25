import routes from './stacks/routes';

const linking = {
  prefixes: ['pingpingnative://'],
  config: {
    [routes.routeStack.name]: {
      screens: {
        [routes.routeStack.routeDetailsScreen]: 'route/:routeId',
        [routes.routeStack.taskScreen]: 'route/:routeId/:task',
      },
    },
  },
};

export default linking;
