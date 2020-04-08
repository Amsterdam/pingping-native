import React from 'react';
import {Text} from 'native-base';
import {ppLogoColors} from '../lib/colors';
import commonStyles from '../lib/commonStyles';

function coloredTextPrinter(message) {
  const colorMessage = [];
  let position = 0;

  for (var i = 0; i < message.length; i++) {
    if (position > ppLogoColors.length - 1) {
      position = 0;
    }
    colorMessage.push(
      <Text
        key={i}
        style={{...commonStyles.logoFont, color: ppLogoColors[position]}}>
        {message.charAt(i)}
      </Text>,
    );
    position++;
  }
  return colorMessage;
}

export default coloredTextPrinter;
