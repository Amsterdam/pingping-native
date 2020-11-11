import React from 'react';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Header, Icon, Left, Button as NbButton, Right} from 'native-base';
import {appColors} from '../../config/colors';
import ProgressBar from '../shared/ProgressBar';
import Title from '../typography/Title';
import {testIDs} from '../../../e2e/modulesTestIDs';

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
      <Title style={styles.headerTitle}>
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
  content: {flex: 1, padding: 20},
  header: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    color: appColors.primary,
  },

  icon: {
    color: '#000',
    fontSize: 32,
  },
  flex: {flex: 1},
});

QuestionScreenHeader.propTypes = {
  currentTask: PropTypes.object.isRequired,
  doRevertTask: PropTypes.func.isRequired,
};

export default QuestionScreenHeader;
