import React from 'react';

import {Header, Icon, Left, Button as NbButton, Right} from 'native-base';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, View} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import {appColors, ppBaseColors} from '../../config/colors';
import normalizeValue from '../../helpers/normalizeValue';
import ProgressBar from '../shared/ProgressBar';
import Title from '../typography/Title';

const QuestionScreenHeader = ({currentTask, doRevertTask}) => {
  return (
    <Header style={styles.header} transparent noShadow>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.background}
      />
      <Left style={styles.flex}>
        <NbButton
          transparent
          onPress={doRevertTask}
          testID={testIDs.NAVIGATION.HEADER_BACK_BUTTON}>
          <Icon name="arrowleft" type="AntDesign" style={styles.icon} />
        </NbButton>
      </Left>
      <Title style={styles.headerTitle} variant="h6">
        {currentTask && currentTask.headerTitle}
      </Title>

      <Right>
        <View>
          <ProgressBar progress={currentTask.progress} />
        </View>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  headerTitle: {
    color: appColors.primary,
  },
  icon: {
    color: ppBaseColors.PP_BLACK,
    fontSize: normalizeValue(32),
  },
  flex: {flex: 1},
});

QuestionScreenHeader.propTypes = {
  currentTask: PropTypes.object.isRequired,
  doRevertTask: PropTypes.func.isRequired,
};

export default QuestionScreenHeader;
