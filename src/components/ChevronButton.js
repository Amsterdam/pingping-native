import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Body from './typography/Body';
import {Icon} from 'native-base';

const ChevronButton = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity style={styles.rowFlex} onPress={onPress}>
      <Body>Alles</Body>
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
    fontSize: 20,
  },
});

ChevronButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ChevronButton;
