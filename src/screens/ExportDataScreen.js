import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Content, Container} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import LabeledHeader from '../components/header/LabeledHeader';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/OnboardingButton';

const styles = StyleSheet.create({
  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  margin: {
    marginBottom: 30,
  },
  inputContainer: {alignItems: 'center', justifyContent: 'center'},
});

const ImportDataScreen = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <LabeledHeader filledHeader navigation={navigation} title="Profiel" />
      <Content>
        <ContentLayout>
          <Title style={styles.margin}>Gegevens Exporteren</Title>
          <Body style={styles.margin}>
            Als je van device switcht wil je natuurlijk niet dat al jouw
            gegevens en prestaties op Ping Ping verloren gaan!
          </Body>
          <Body style={styles.margin}>
            Het is heel simpel om jouw gegevens te exporteren naar een nieuw
            device. Kopieer de UUID (Universally Unique Identifier) hieronder en
            plak hem in de 'importeer gegevens' pagina op jouw nieuwe device!
          </Body>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
            <Button
              rounded
              disabled={!value}
              label="Token Kopieren"
              iconType="AntDesign"
              iconName="copy1"
              onPress={() => console.log('copy this stuff')}
            />
          </View>
        </ContentLayout>
      </Content>
    </Container>
  );
};

export default ImportDataScreen;
