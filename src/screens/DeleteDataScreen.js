import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Content, Container} from 'native-base';
import {appColors} from '../lib/colors';
import ContentLayout from '../components/layout/ContentLayout';
import SimpleHeader from '../components/header/SimpleHeader';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/OnboardingButton';

const styles = StyleSheet.create({
  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: appColors.primary,
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  margin: {
    marginBottom: 30,
  },
  inputContainer: {alignItems: 'center', justifyContent: 'center'},
  emojiContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
});

const DeleteDataScreen = ({navigation}) => {
  return (
    <Container>
      <SimpleHeader navigation={navigation} color="white" />
      <Content>
        <ContentLayout>
          <Title style={styles.margin}>Jouw eigen gegevens</Title>
          <View style={styles.emojiContainer}>
            <Text>👆😌</Text>
          </View>
          <Body style={styles.margin}>
            Wij van PingPing gebruiken de door jouw ingevulde gegevens alleen om
            jouw route te bepalen en de app te verbeteren. Wij zullen nooit jouw
            gegevens verkopen aan andere partijen.
          </Body>
          <Body style={styles.margin}>
            Wil je toch graag je inloggegevens verwijderen? Druk simpelweg op de
            knop hieronder om je gegevens uit ons systeem te halen. Hierdoor
            gaat je voortgang verloren.
          </Body>
          <View style={styles.inputContainer}>
            <Button
              deleteButton
              iconName="delete"
              iconType="AntDesign"
              label="Verwijder mijn gegevens"
              onPress={() => console.log('Show delete alert')}
            />
          </View>
        </ContentLayout>
      </Content>
    </Container>
  );
};

export default DeleteDataScreen;
