import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../Button';
import {ppBaseColors} from '../../config/colors';

const YesOrNo = ({answers, state, setState}) => {
  function mapButtons() {
    const buttonArray = [];
    for (const [key, value] of Object.entries(answers)) {
      buttonArray.push(
        <Button
          label={value}
          key={key}
          bordered
          rounded
          style={
            key === state.answerSelected
              ? styles.activeButton
              : styles.whiteButton
          }
          labelStyle={key === state.answerSelected && styles.activeText}
          color="primary"
          onPress={() => setState({answerSelected: key})}
        />,
      );
    }
    return buttonArray;
  }

  return <View>{mapButtons()}</View>;
};

const styles = StyleSheet.create({
  whiteButton: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  activeButton: {
    backgroundColor: ppBaseColors.PP_ORANGE,
    marginBottom: 20,
  },
  activeText: {
    color: '#fff',
  },
});

export default YesOrNo;
