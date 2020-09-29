import React from 'react';
import {View} from 'react-native';
import Button from '../Button';

const YesOrNo = ({answers, state, setState}) => {
  function mapButtons() {
    const buttonArray = [];
    for (const [key, value] of Object.entries(answers)) {
      buttonArray.push(
        <Button
          label={value}
          key={key}
          active={key === state.answerSelected}
          onPress={() => setState({answerSelected: key})}
          testid={`${key}_BUTTON`.toUpperCase()}
        />,
      );
    }
    return buttonArray;
  }

  return <View>{mapButtons()}</View>;
};

export default YesOrNo;
