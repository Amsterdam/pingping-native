import React, {useState} from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import HTML from 'react-native-render-html';

import {testIDs} from '../../../../e2e/modulesTestIDs';
import AmsterdamBuildings from '../../../assets/svg/AmsterdamBuildings';
import {appColors} from '../../../config/colors';
import normalizeValue from '../../../helpers/normalizeValue';
import ContentLayout from '../../layout/ContentLayout';
import WebViewModal from '../../modals/WebViewModal';
import Button from '../../shared/RoundedButton';
import Title from '../../typography/Title';

const GoBack = ({currentTask, doRevertTask}) => {
  const [urlToVisit, setUrlToVisit] = useState('https://amsterdam.nl');
  const [webViewOpen, setWebviewOpen] = useState(false);
  const linkPressed = (event, href) => {
    setUrlToVisit(href);
    setWebviewOpen(true);
  };

  const closeModal = () => {
    setWebviewOpen(false);
  };

  return (
    <ContentLayout style={styles.content}>
      <View style={styles.container} testID={testIDs.GO_BACK_SCREEN.SCREEN}>
        <AmsterdamBuildings />
        <View style={styles.subContainer}>
          <Title style={styles.title}>{currentTask.title}</Title>
          <HTML
            html={currentTask.description}
            baseFontStyle={styles.htmlFontStyle}
            onLinkPress={(event, href) => {
              linkPressed(event, href);
            }}
          />
        </View>
        <View>
          <Button
            style={styles.button}
            onPress={doRevertTask}
            label="TERUG"
            testid={testIDs.GO_BACK_SCREEN.GO_BACK_BUTTON}
          />
        </View>
        <WebViewModal
          urlToVisit={urlToVisit}
          closeModal={closeModal}
          webViewOpen={webViewOpen}
          setWebviewOpen={setWebviewOpen}
        />
      </View>
    </ContentLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: appColors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  subContainer: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 15,
  },
  htmlFontStyle: {
    fontFamily: 'Raleway-Regular',
    textAlign: 'center',
    fontSize: normalizeValue(15),
    lineHeight: normalizeValue(25),
  },
});

GoBack.propTypes = {
  currentTask: PropTypes.object.isRequired,
  doRevertTask: PropTypes.func.isRequired,
};

export default GoBack;
