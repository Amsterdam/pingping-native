import {gql} from '@apollo/client';
import ROUTES_ATTRIBUTES from '../Fragment/routesAttributes';

const GET_ROUTES_QUERY = gql`
  query GET_ROUTES_QUERY {
    getRoutes {
      currentRoutes {
        ...RoutesFragment
      }
      availableRoutes {
        ...RoutesFragment
      }
      archivedRoutes {
        ...RoutesFragment
      }
    }
  }
  ${ROUTES_ATTRIBUTES}
`;

export default GET_ROUTES_QUERY;
