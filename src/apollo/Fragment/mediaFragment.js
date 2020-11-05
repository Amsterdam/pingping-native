import {gql} from '@apollo/client';

const MEDIDA_FRAGMENT = gql`
  fragment MediaFragment on Media {
    type
    value
    thumbnail
    color
  }
`;

export default MEDIDA_FRAGMENT;
