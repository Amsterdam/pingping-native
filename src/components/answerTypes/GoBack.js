import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';
import Title from '../typography/Title';
import AmsterdamBuildings from '../../assets/svg/AmsterdamBuildings';
import Button from '../OnboardingButton';
import WebViewModal from '../modals/WebViewModal';
import ContentLayout from '../layout/ContentLayout';

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
    <ContentLayout>
      <View style={styles.container}>
        <AmsterdamBuildings />
        <View style={{alignItems: 'center'}}>
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
          <Button style={styles.button} onPress={doRevertTask} label="TERUG" />
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
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 300,
  },
  title: {
    textAlign: 'center',
    marginBottom: 15,
  },
  htmlFontStyle: {
    fontFamily: 'Raleway-Regular',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 25,
  },
});

export default GoBack;
