import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Content, Container} from 'native-base';
import PropTypes from 'prop-types';
import {appColors} from '../lib/colors';
import ContentLayout from '../components/layout/ContentLayout';
import LabeledHeader from '../components/header/LabeledHeader';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/OnboardingButton';
import DeleteDataModal from '../components/modals/DeleteDataModal';

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

const DeleteDataScreen = ({navigation, setLogin}) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <LabeledHeader filledHeader navigation={navigation} title="Privacy" />
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
              onPress={() => setOpen(true)}
            />
          </View>
        </ContentLayout>
      </Content>
      <DeleteDataModal
        open={open}
        setOpen={setOpen}
        setLogin={setLogin}
        navigation={navigation}
      />
    </Container>
  );
};

DeleteDataScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  setLogin: PropTypes.func.isRequired,
};

export default DeleteDataScreen;
