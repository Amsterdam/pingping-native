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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Toast, Root} from 'native-base';
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
const INITIAL_STATE = {feedback: '', routeName: ''};

const RouteQuestionaireModal = ({navigation}) => {
  const [questionnaireModal] = useMutation(QUESTIONNAIRE_MODAL);
  const [submitFeedback] = useMutation(SUBMIT_ROUTE_FEEDBACK_MUTATION);
  const {data} = useQuery(GET_QUESTIONNAIRE_MODAL);
  const [state, setState] = React.useState(INITIAL_STATE);

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
          routeName: state.routeName,
          feedback: state.feedback,
        },
      });
      setState(INITIAL_STATE);
      closeModal();
    } catch (error) {
      Toast.show({
        text: 'Er is iets mis gegaan, je feedback is niet verstuurd',
        textStyle: {fontFamily: 'Raleway-Regular'},
        style: {backgroundColor: '#000', borderRadius: 10},
        duration: 2000,
      }); // change the error message once complete
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
        <Root>
          <StatusBar
            backgroundColor={appColors.headerColor}
            barStyle="light-content"
          />
          <KeyboardAvoidingView behavior="position" style={styles.container}>
            <ScrollView
              contentContainerStyle={styles.content}
              keyboardShouldPersistTaps={'handled'}>
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
                    We hebben er samen voorgezorgd dat jij je basis op orde
                    hebt. Nu hoef je je daar geen zorgen meer om te maken en kan
                    je weer terug naar leuke dingen doen.
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
                    onChangeText={(text) =>
                      setState({...state, routeName: text})
                    }
                    placeholderTextColor={appColors.greyedOut}
                    value={state.routeName}
                    placeholder="Route naam"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputContainerMultiline}
                    onChangeText={(text) =>
                      setState({...state, feedback: text})
                    }
                    value={state.feedback}
                    placeholder="Wat denk jij nodig te hebben?"
                    multiline
                    scrollEnabled={false}
                    numberOfLines={6}
                  />
                </View>
                <Button
                  style={styles.button}
                  disabled={!state.routeName || !state.feedback}
                  onPress={doSubmit}
                  label="Verzenden"
                />
              </ContentLayout>
            </ScrollView>
          </KeyboardAvoidingView>
        </Root>
      </Modal>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.background,
    flex: 1,
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
    color: 'black',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputContainerMultiline: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    height: 100,
    color: 'black',
  },
  button: {
    justifyContent: 'center',
  },
});

RouteQuestionaireModal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RouteQuestionaireModal;
