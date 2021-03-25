import routes from './stacks/routes';

const linking = {
  prefixes: ['pingpingNative://'],
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
