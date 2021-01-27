import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {BORDER_RADIUS, commonStyles} from '../../config/commonStyles';
import Button from '../shared/RoundedButton';
import Title from '../typography/Title';
import Body from '../typography/Body';
import FeedbackIcon from '../../assets/svg/FeedbackIcon';
import {testIDs} from '../../../e2e/modulesTestIDs';

const MARGIN = 5;

const FeedbackCard = ({style, onPress}) => {
  return (
    <View style={[styles.paper, style]} testID={testIDs.ROUTES.FEEDBACK_CARD}>
      <View style={styles.descriptionContainer}>
        <View style={styles.titleContainer}>
          <Title style={styles.title} variant="h6">
            Feedback please
          </Title>
          <FeedbackIcon />
        </View>
        <Body variant="b4" style={styles.body}>
          Wat vond je van deze route? Help ons de app te verbeteren
        </Body>
        <Button
          full
          style={styles.button}
          onPress={onPress}
          label="Feedback geven"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paper: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
    marginVertical: 10,
    ...commonStyles.shadow,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    marginBottom: MARGIN,
  },
  body: {
    marginBottom: MARGIN,
  },
  descriptionContainer: {
    padding: 20,
  },
});

FeedbackCard.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
};
FeedbackCard.defaultProps = {
  style: {},
};

export default FeedbackCard;
