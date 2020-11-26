import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import SimpleHeader from '../../header/SimpleHeader';
import {Container} from 'native-base';
import Button from '../../shared/RoundedButton';
import {BASE_URL} from '../../../config/initialSettings';
import Title from '../../typography/Title';
import Body from '../../typography/Body';
import {appColors} from '../../../config/colors';

const Confirm = ({currentTask, updateTask, refetch}) => {
  const doUpdateTask = (answer) => async () => {
    try {
      await updateTask({
        variables: {
          answer,
          taskId: currentTask.taskId,
        },
      });
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const mapButtons = () => {
    const buttonArray = [];
    for (const [key, value] of Object.entries(currentTask.choices)) {
      buttonArray.push(
        <Button
          label={value}
          key={key}
          style={[styles.button, key === 'no' && styles.whiteButton]}
          labelStyle={[key === 'no' && styles.label]}
          onPress={doUpdateTask(key)}
          testid={`${key}_BUTTON`.toUpperCase()}
        />,
      );
    }
    return buttonArray;
  };

  return (
    <Container>
      <SimpleHeader title={currentTask.headerTitle} color="white" />
      <View style={styles.viewContainer}>
        <View>
          {currentTask.media?.value && (
            <Image
              source={{uri: `${BASE_URL}${currentTask.media.value}`}}
              style={styles.image}
            />
          )}
        </View>
        <View>
          <Title style={styles.title}>{currentTask.title}</Title>
          <Body style={styles.onboardingText}>{currentTask.description}</Body>
        </View>

        <View style={styles.buttonContainer}>{mapButtons()}</View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {width: 150, height: 150, alignSelf: 'center'},
  content: {flex: 1, padding: 20},
  button: {
    alignSelf: 'center',
    width: '60%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  label: {
    color: appColors.primary,
  },
  whiteButton: {
    backgroundColor: 'white',
    borderColor: appColors.primary,
    borderWidth: 1,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: appColors.background,
    paddingHorizontal: 25,
  },
  title: {
    fontWeight: '400',
    fontSize: 26,
    color: appColors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  onboardingText: {
    textAlign: 'center',
    color: appColors.subText,
    fontSize: 14,
  },
  buttonContainer: {
    alignSelf: 'stretch',
  },
});

Confirm.propTypes = {
  currentTask: PropTypes.object.isRequired,
};

export default Confirm;
