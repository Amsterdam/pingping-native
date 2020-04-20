import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Content, Container} from 'native-base';
import {appColors} from '../lib/colors';
import Button from '../components/Button';
import SimpleHeader from '../components/header/SimpleHeader';
import QuestionComponent from '../components/QuestionComponent';

const styles = StyleSheet.create({
  content: {flex: 1, padding: 20},
  label: {fontSize: 20, color: appColors.primaryColor},
  button: {alignSelf: 'flex-end'},

  buttonContainer: {
    justifyContent: 'flex-end',
  },
});

const INITIAL_STATE = {
  answerSelected: false,
};

const QuestionScreen = ({navigation}) => {
  const [state, setState] = React.useState(INITIAL_STATE);
  return (
    <Container>
      <SimpleHeader navigation={navigation} color="white" />
      <Content contentContainerStyle={styles.content}>
        <QuestionComponent
          question="Wat is je geboortedatum?"
          answers={['ja', 'nee']}
          type="binary"
          setState={setState}
          navigation={navigation}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('CompletedQuestions')}
            label="Volgende"
            transparent
            disabled={!state.answerSelected}
            labelStyle={styles.label}
            style={styles.button}
          />
        </View>
      </Content>
    </Container>
  );
};

export default QuestionScreen;
