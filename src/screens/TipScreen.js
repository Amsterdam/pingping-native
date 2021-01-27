import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Content} from 'native-base';
import LabeledHeader from '../components/header/LabeledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';

const TipScreen = ({navigation, route}) => {
  const {tips} = route.params;
  return (
    <Container>
      <LabeledHeader title="Tips" navigation={navigation} />
      <ContentLayout>
        <Content contentContainerStyle={styles.content}>
          {tips?.length > 0 &&
            tips.map((tip) => (
              <View style={styles.paragraphContainer} key={tip.title}>
                <Title style={styles.subTitle} variant="h4">
                  {tip.title}
                </Title>
                <Body variant="b3">{tip.description}</Body>
              </View>
            ))}
        </Content>
      </ContentLayout>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 10,
    alignItems: 'center',
  },
  subTitle: {
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
