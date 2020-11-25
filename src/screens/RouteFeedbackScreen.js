import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Container, Icon, Root} from 'native-base';
import {useMutation} from '@apollo/client';
import ImageOverlayHeader from '../components/header/ImageOverlayHeader';
import Title from '../components/typography/Title';
import {appColors, ppBaseColors} from '../config/colors';
import SUBMIT_ROUTE_FEEDBACK_MUTATION from '../apollo/Mutation/submitRouteFeedback';
import RoundedButton from '../components/shared/RoundedButton';

const INITIAL_STATE = {feedback: '', routeName: '', numberActive: 0};

const MARGIN = 20;

function RouteFeedbackScreen({navigation = () => {}, route = {}}) {
  const {cover} = route.params;
  const [submitFeedback] = useMutation(SUBMIT_ROUTE_FEEDBACK_MUTATION);
  const [state, setState] = React.useState(INITIAL_STATE);

  const onRate = (stars) => () => {
    setState({...state, numberActive: stars});
  };

  const starRating = () => {
    const numberOfStars = 5;
    const starElements = [];
    for (let index = 0; index < numberOfStars; index++) {
      const active = index < state.numberActive;
      starElements.push(
        <TouchableOpacity
          style={styles.button}
          onPress={onRate(index + 1)}
          activeOpacity={0.5}
          key={`${index}-star`}>
          <Icon
            style={[styles.icon, active && styles.activeIcon]}
            name={active ? 'star' : 'staro'}
            type={'AntDesign'}
          />
        </TouchableOpacity>,
      );
    }
    return starElements;
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Root>
        <ScrollView>
          <ImageOverlayHeader navigation={navigation} cover={cover} />
          <View style={styles.contentContainer}>
            <Title style={styles.title}>Wat vond je van de route?</Title>
            <View style={styles.starContainer}>{starRating()}</View>
            <View style={styles.inputContainer}>
              <Title style={styles.anyTips}>
                Heb je nog tips om de app te verbeteren?
              </Title>
              <TextInput
                style={styles.inputContainerMultiline}
                onChangeText={(text) => setState({...state, feedback: text})}
                value={state.feedback}
                placeholder="Wat vind jij dat er beter kan?"
                multiline
                scrollEnabled={false}
                numberOfLines={6}
              />
            </View>
            <RoundedButton label="verstuur" style={styles.button} disabled />
          </View>
        </ScrollView>
      </Root>
    </Container>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  label: {
    color: appColors.primary,
  },
  title: {
    marginTop: MARGIN,
  },
  description: {
    marginTop: MARGIN,
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginVertical: MARGIN,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainerMultiline: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    height: 100,
    color: 'black',
  },
  anyTips: {
    fontSize: 18,
    marginBottom: MARGIN,
  },
  icon: {
    fontSize: 30,
  },
  activeIcon: {
    color: ppBaseColors.PP_GOLD,
  },
  button: {
    marginTop: MARGIN,
    alignSelf: 'flex-end',
  },
});

RouteFeedbackScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  cover: PropTypes.object,
};
RouteFeedbackScreen.defaultProps = {
  cover: {
    value: '',
    thumbnail: '',
    color: '',
  },
};

export default RouteFeedbackScreen;
