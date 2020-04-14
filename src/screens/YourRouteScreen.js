import React from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container, Text, Left, View} from 'native-base';
import HeaderBackButton from '../components/header/HeaderBackButton';
import Title from '../components/typography/Title';
import HeaderTemplate from '../components/header/HeaderTemplate';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const YourRouteScreen = ({navigation}) => {
  return (
    <Container>
      <HeaderTemplate style={styles.header}>
        <View>
          <HeaderBackButton
            style={{fontSize: 32}}
            navigation={navigation}
            color="white"
          />
        </View>
        <Title style={styles.title}>Je Route!</Title>
      </HeaderTemplate>
      <Content>
        <Text>asdad</Text>
      </Content>
    </Container>
  );
};

export default YourRouteScreen;
