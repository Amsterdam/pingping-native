import React from 'react';
import {Button, Icon} from 'native-base';

const HeaderBackButton = ({navigation, style, color = 'primary'}) => {
  return (
    <Button transparent onPress={() => navigation.goBack()}>
      <Icon
        name="arrowleft"
        type="AntDesign"
        style={{...style, color: color === 'white' ? '#000' : '#fff'}}
      />
    </Button>
  );
};

export default HeaderBackButton;
