import React from 'react';
import {StatusBar} from 'react-native';
import {Header, Left, Button, Icon} from 'native-base';
import {appColors} from '../../lib/colors';

const SimpleHeader = ({navigation, color}) => {
  const headerColor = () => {
    switch (color) {
      case 'primary':
        return appColors.headerColor;

      case 'white':
        return appColors.white;

      default:
        break;
    }
  };
  return (
    <Header style={{backgroundColor: headerColor()}} transparent noShadow>
      <StatusBar
        backgroundColor={appColors.headerColor}
        barStyle="light-content"
      />
      <Left>
        <Button transparent>
          <Icon
            name="arrow-back"
            style={{color: color === 'white' ? '#000' : '#fff'}}
            onPress={() => navigation.goBack()}
          />
        </Button>
      </Left>
    </Header>
  );
};

export default SimpleHeader;
