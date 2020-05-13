import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Content, Container} from 'native-base';
import {appColors} from '../lib/colors';
import ContentLayout from '../components/layout/ContentLayout';
import SimpleHeader from '../components/header/SimpleHeader';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/Button';

const styles = StyleSheet.create({
  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: appColors.primaryColor,
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
});

const ImportRouteScreen = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <SimpleHeader navigation={navigation} color="white" />
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
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <Button
              rounded
              disabled={!value}
              label="UUID Kopieren"
              onPress={() => console.log('copy this stuff')}
            />
          </View>
        </ContentLayout>
      </Content>
    </Container>
  );
};

export default ImportRouteScreen;
