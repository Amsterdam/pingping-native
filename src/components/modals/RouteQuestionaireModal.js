import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  StatusBar,
} from 'react-native';
import {useQuery, useMutation} from '@apollo/client';
import Button from '../OnboardingButton';
import ContentLayout from '../layout/ContentLayout';
import Title from '../typography/Title';
import Body from '../typography/Body';
import IconButton from '../IconButton';
import {appColors} from '../../config/colors';
import VaultImage from '../../assets/vault.png';
import QUESTIONNAIRE_MODAL from '../../apollo/Mutation/questionnaireModal';
import GET_QUESTIONNAIRE_MODAL from '../../apollo/Query/getQuestionnaireModal';
import SUBMIT_ROUTE_FEEDBACK_MUTATION from '../../apollo/Mutation/submitRouteFeedback';

const screenHeight = Dimensions.get('window').height;

const RouteQuestionaireModal = ({navigation}) => {
  const [questionnaireModal] = useMutation(QUESTIONNAIRE_MODAL);
  const [submitFeedback] = useMutation(SUBMIT_ROUTE_FEEDBACK_MUTATION);
  const {data} = useQuery(GET_QUESTIONNAIRE_MODAL);
  const [feedback, setFeedback] = React.useState('');
  const [taskName, setTaskName] = React.useState('');

  const closeModal = async () => {
    await questionnaireModal({
      variables: {
        questionnaireModalOpen: false,
      },
    });
  };

  const doSubmit = async () => {
    try {
      await submitFeedback({
        variables: {
          routeId: taskName,
          taskName,
          feedback,
        },
      });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  if (data && data.questionnaireModalOpen) {
    const {questionnaireModalOpen} = data;
    return (
      <Modal
        animationType="slide"
        visible={questionnaireModalOpen}
        presentationStyle="overFullScreen"
        statusBarTranslucent>
        <StatusBar
          backgroundColor={appColors.headerColor}
          barStyle="light-content"
        />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={VaultImage} style={styles.image} />
            <View style={styles.imageOverlay}>
              <IconButton
                iconName="close"
                iconType="MaterialIcons"
                onPress={closeModal}
                size="L"
              />
            </View>
          </View>
          <ContentLayout>
            <View style={styles.textContainer}>
              <Title>FIKS JE BASIS</Title>
              <Body>
                We hebben er samen voorgezorgd dat jij je basis op orde hebt. Nu
                hoef je je daar geen zorgen meer om te maken en kan je weer
                terug naar leuke dingen doen.
              </Body>
            </View>
            <View style={styles.textContainer}>
              <Title>DE ROUTE</Title>
              <Body>
                Wij zouden graag input van jou willen hebben over wat voor
                andere routes je graag in de pingping app zou willen zien.
                Wanneer de route is afgestemd kan hij uiteindelijk in de app
                verschijnen.
              </Body>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setTaskName(text)}
                value={taskName}
                placeholder="Route naam"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputContainerMultiline}
                onChangeText={(text) => setFeedback(text)}
                value={feedback}
                placeholder="Wat denk jij nodig te hebben?"
                multiline
              />
            </View>
            <Button
              style={styles.button}
              disabled={!taskName || !feedback}
              onPress={doSubmit}
              label="Verzenden"
            />
          </ContentLayout>
        </ScrollView>
      </Modal>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.background,
  },
  textContainer: {
    marginBottom: 25,
  },
  image: {
    width: '100%',
    height: screenHeight * 0.2,
  },
  imageContainer: {
    position: 'relative',
  },
  imageOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 50,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputContainerMultiline: {
    height: 125,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  button: {
    justifyContent: 'center',
  },
});

RouteQuestionaireModal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RouteQuestionaireModal;
