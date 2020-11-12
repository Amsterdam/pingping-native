import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../onboarding/AnswerButtonOnboarding';

const YesOrNo = ({answers, state, setState}) => {
  function mapButtons() {
    const buttonArray = [];
    for (const [key, value] of Object.entries(answers)) {
      buttonArray.push(
        <Button
          label={value}
          key={key}
          active={key === state.answerSelected}
          onPress={() => setState({...state, answerSelected: key})}
          testid={`${key}_BUTTON`.toUpperCase()}
        />,
      );
    }
    return buttonArray;
  }

  return <View>{mapButtons()}</View>;
};

YesOrNo.propTypes = {
  answers: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

export default YesOrNo;
