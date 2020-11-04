import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'native-base';
import {setHeaderColor} from '../../config/colors';
import DynamicStatusbar from './DynamicStatusbar';

const HeaderTemplate = ({style, children, color = 'primary'}) => {
  return (
    <Header
      style={{backgroundColor: setHeaderColor(color), ...style}}
      transparent
      noShadow>
      <DynamicStatusbar color={color} />
      {children}
    </Header>
  );
};

HeaderTemplate.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  color: PropTypes.string,
};

HeaderTemplate.defaultProps = {
  style: {},
  color: 'primary',
};

export default HeaderTemplate;
