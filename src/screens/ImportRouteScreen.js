import React from 'react';
import {StyleSheet, TextInput, View, Dimensions} from 'react-native';
import {Content, Container} from 'native-base';
import {appColors} from '../lib/colors';
import SimpleHeader from '../components/header/SimpleHeader';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/Button';

const styles = StyleSheet.create({
  content: {flex: 1, padding: 20},
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
});

const ImportRouteScreen = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <SimpleHeader navigation={navigation} color="white" />
      <Content contentContainerStyle={styles.content}>
        <Title>Gegevens Importeren</Title>
        <Body>
          Als je van device switcht wil je natuurlijk niet dat al jouw gegevens
          en prestaties op Ping Ping verloren gaan!
        </Body>
        <Body>
          Het is heel simpel om jouw gegevens te exporteren naar een nieuw
          device. Kopieer de UUID (Unieke link) vanuit de 'exporteer gegevens'
          pagina op jouw oude device en plak hem hieronder op jouw nieuwe
          device!
        </Body>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <Button
            rounded
            disabled={!value}
            labelStyle={styles.label}
            label="Importeer gegevens"
            onPress={() => navigation.navigate('ImportRoutes')}
          />
        </View>
      </Content>
    </Container>
  );
};

export default ImportRouteScreen;
