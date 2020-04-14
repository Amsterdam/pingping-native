import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Title from '../components/typography/Title';
import {Text} from 'native-base';
import {appColors} from '../lib/colors';

const MARGIN = 10;

const styles = StyleSheet.create({
  tileContainer: {
    marginTop: MARGIN,
    marginLeft: MARGIN,
    backgroundColor: appColors.primaryColor,
    justifyContent: 'space-between',
    borderRadius: 8,
    height: 150,
    width: 250,
    padding: 14,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  favButtonContainer: {position: 'absolute', right: 15, bottom: 15},
  tileImage: {
    width: 140,
    height: 145,
    borderRadius: 20,
    marginBottom: MARGIN,
  },
});

const TaskTile = ({benefit, navigation, benefits}) => {
  console.log(navigation.state);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <View style={styles.tileContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.imageContainer}>
            <Text>😙</Text>
          </View>
          <View>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.1)',
                padding: 10,
                borderRadius: 100,
              }}>
              <Title
                style={{
                  color: '#fff',
                  fontSize: 14,
                }}>
                20 City Pings
              </Title>
            </View>
          </View>
        </View>
        <View>
          <Title style={{fontSize: 22, color: '#fff'}}>
            Regel je woonadres
          </Title>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskTile;
