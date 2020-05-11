import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Content, Container} from 'native-base';
import {useQuery} from '@apollo/client';
import {appColors} from '../lib/colors';
import Button from '../components/Button';
import SimpleHeader from '../components/header/SimpleHeader';
import QuestionComponent from '../components/QuestionComponent';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';

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
  day: '',
  month: '',
  year: '',
};

const QuestionScreen = ({navigation}) => {
  const [state, setState] = React.useState(INITIAL_STATE);
  const {data, loading, error} = useQuery(GET_STATUS_QUERY);
  const currentTask = data && data.getStatus.currentTask;
  const checkDisabled = () => {
    if (currentTask.type === 'DateOfBirth') {
      return !state.day || !state.month || !state.year;
    }
    return !state.answerSelected;
  };
  // refactor this
  return (
    <Container>
      <SimpleHeader navigation={navigation} color="white" />
      <Content contentContainerStyle={styles.content}>
        {data && (
          <React.Fragment>
            <QuestionComponent
              question={currentTask.title}
              answers={['ja', 'nee']}
              type={currentTask.type}
              setState={setState}
              answerSelected={state.answerSelected}
              day={state.day}
              month={state.month}
              year={state.year}
              state={state}
              navigation={navigation}
            />
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => navigation.navigate('CompletedQuestions')}
                label="Volgende"
                transparent
                disabled={checkDisabled()}
                labelStyle={styles.label}
                style={styles.button}
              />
            </View>
          </React.Fragment>
        )}
      </Content>
    </Container>
  );
};

export default QuestionScreen;
