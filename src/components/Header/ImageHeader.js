import React from 'react';
import {View, Left} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import HeaderTemplate from './HeaderTemplate';
import HeaderBackButton from './HeaderBackButton';
import Title from '../typography/Title';

const ImageHeader = ({navigation, imageToDisplay, title}) => {
  console.log(imageToDisplay);
  return (
    <HeaderTemplate style={styles.header} color="primary">
      <View>
        <Left style={styles.headerButtonContainer}>
          <HeaderBackButton navigation={navigation} />
        </Left>
      </View>
      <Title style={styles.title}>{title}</Title>
      <View style={styles.absolute}>
        <View style={styles.paper}>
          <Image source={imageToDisplay} />
        </View>
      </View>
    </HeaderTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerButtonContainer: {
    flex: 0,
  },
  title: {
    color: '#fff',
    letterSpacing: 5,
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 225,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    padding: 100,
    height: 50,
    width: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageHeader;
