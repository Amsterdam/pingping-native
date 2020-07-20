import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Content, Container, Icon} from 'native-base';
import SimpleHeader from '../components/header/SimpleHeader';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../lib/colors';
import Button from '../components/Button';

const styles = StyleSheet.create({
  paper: {
    backgroundColor: '#fff',
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
    alignSelf: 'stretch',
    padding: 15,
    margin: 10,
    marginTop: 30,
    borderRadius: 20,
  },
  subTitle: {
    fontSize: 18,
  },
  inputContainer: {
    alignSelf: 'stretch',
    padding: 10,
  },
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
  button: {margin: 10},
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    borderColor: '#000',
    paddingBottom: 10,
  },
  icon: {marginRight: 30},
  textInput: {
    flex: 1,
    fontFamily: 'Heavitas',
    height: 50,
    fontSize: 20,
  },
});

const INITIAL_STATE = {
  amount: 0,
  goal: '',
  description: '',
};

const KasboekAddGoalScreen = ({navigation}) => {
  const [state, setState] = React.useState({INITIAL_STATE});

  return (
    <Container>
      <SimpleHeader navigation={navigation} color="white" />
      <ContentLayout>
        <Content>
          <Title>Nieuw goal aanmaken</Title>
          <View>
            <View style={styles.paper}>
              <Title style={styles.subTitle}>Nieuw goal</Title>
              <View style={styles.inputContainer}>
                <View style={styles.passwordContainer}>
                  <Icon
                    name="euro"
                    type="FontAwesome"
                    color="#000"
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setState({...state, amount: text})}
                    value={state.amount}
                    autoFocus
                    keyboardType={'numeric'}
                  />
                </View>
                <Body>Goal titel:</Body>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setState({...state, goal: text})}
                  value={state.goal}
                />
                <Body>Goal beschrijving:</Body>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) =>
                    setState({...state, description: text})
                  }
                  value={state.description}
                />
              </View>
            </View>
            <Button label="Goal opslaan" rounded style={styles.button} />
          </View>
        </Content>
      </ContentLayout>
    </Container>
  );
};

export default KasboekAddGoalScreen;
