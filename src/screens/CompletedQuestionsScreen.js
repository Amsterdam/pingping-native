import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Content, Container, Left} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/Button';
import HeaderTemplate from '../components/header/HeaderTemplate';
import HeaderBackButton from '../components/header/HeaderBackButton';
import ThumbsUp from '../assets/thumbs-up.png';

const CompletedQuestionsScreen = ({navigation, setLogin}) => {
  return (
    <Container>
      <HeaderTemplate style={styles.header} color="primary">
        <View>
          <Left style={styles.headerButtonContainer}>
            <HeaderBackButton navigation={navigation} />
          </Left>
        </View>
        <Title style={styles.title}>LEKKER</Title>
        <View style={styles.absolute}>
          <View style={styles.paper}>
            <Image source={ThumbsUp} />
          </View>
        </View>
      </HeaderTemplate>
      <ContentLayout style={styles.content}>
        <Content>
          <Body style={styles.paragraph1}>
            Met de antwoorden die jij hebt gegeven hebben wij voor jou een
            persoonlijke route samengesteld.
          </Body>
          <Body style={styles.paragraph2}>
            Bekijk wat jij moet doen om je basis op orde te hebben!
          </Body>
          <Button rounded label="Naar mijn Route" onPress={setLogin} />
        </Content>
      </ContentLayout>
    </Container>
  );
};

export default CompletedQuestionsScreen;

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
  paragraph1: {
    paddingBottom: 20,
  },
  paragraph2: {
    paddingBottom: 100,
  },
  button: {
    marginBottom: 15,
    marginTop: 15,
  },
  content: {
    marginTop: 150,
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
