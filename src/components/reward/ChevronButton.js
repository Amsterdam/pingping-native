import React from 'react';

import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';

import normalizeValue from '../../helpers/normalizeValue';
import Body from '../typography/Body';

const ChevronButton = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity style={styles.rowFlex} onPress={onPress}>
      <Body variant="b4">Alles</Body>
      <Icon style={styles.chevron} name="chevron-right" type="MaterialIcons" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chevron: {
    fontSize: normalizeValue(20),
  },
});

ChevronButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ChevronButton;
