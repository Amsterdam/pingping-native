import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import LabeledHeader from '../components/header/LabeledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import {Content, Container} from 'native-base';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';

const TipScreen = ({navigation, route}) => {
  const {tips} = route.params;
  return (
    <Container>
      <LabeledHeader title="Tips" navigation={navigation} />
      <ContentLayout>
        <Content>
          {tips?.length > 0 &&
            tips.map((tip) => (
              <View style={styles.paragraphContainer} key={tip.title}>
                <Title style={styles.subTitle}>{tip.title}</Title>
                <Body>{tip.description}</Body>
              </View>
            ))}
        </Content>
      </ContentLayout>
    </Container>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  paragraphContainer: {
    marginBottom: 25,
  },
});

TipScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default TipScreen;
