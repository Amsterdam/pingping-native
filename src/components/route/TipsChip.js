import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Icon} from 'native-base';
import Title from '../typography/Title';
import {appColors} from '../../config/colors';
import routes from '../../App/stacks/routes';
import normalizeValue from '../../helpers/normalizeValue';

const TipsChip = ({navigation, tips}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(routes.routeStack.tipScreen, {
          tips,
        })
      }>
      <Icon name="lightbulb-o" type="FontAwesome" style={styles.icon} />
      <Title style={styles.title} variant="h6">
        Tips
      </Title>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
  },
  title: {
    color: '#fff',
    marginTop: 5,
    marginLeft: 5,
  },
  icon: {
    color: '#fff',
    fontSize: normalizeValue(14),
  },
});

TipsChip.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TipsChip;
