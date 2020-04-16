import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';

const Title = ({children, align = 'left', style}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Heavitas',
      fontWeight: 'bold',
      textAlign: align,
      fontSize: 30,
    },
  });

  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

export default Title;
