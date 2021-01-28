import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import HeaderTemplate from './HeaderTemplate';
import Title from '../typography/Title';
import {appColors} from '../../config/colors';

const SimpleHeader = ({title = '', color = 'primary'}) => {
  return (
    <HeaderTemplate style={styles.header} color={color}>
      <Title
        style={[
          color === 'primary' && styles.titleWhite,
          color === 'white' && styles.titlePrimary,
        ]}
        variant="h6">
        {title}
      </Title>
    </HeaderTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePrimary: {
    color: appColors.primary,
  },
  titleWhite: {
    color: appColors.white,
  },
});

SimpleHeader.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

SimpleHeader.defaultProps = {
  title: '',
  color: 'primary',
};

export default SimpleHeader;
