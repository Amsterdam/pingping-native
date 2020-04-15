import React from 'react';
import {Button, Icon} from 'native-base';

const HeaderBackButton = ({navigation, style, color = 'primary'}) => {
  return (
    <Button transparent>
      <Icon
        name="arrow-back"
        style={{...style, color: color === 'white' ? '#000' : '#fff'}}
        onPress={() => navigation.goBack()}
      />
    </Button>
  );
};

export default HeaderBackButton;
