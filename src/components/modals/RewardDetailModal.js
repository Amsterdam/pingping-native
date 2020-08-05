import React from 'react';
import {View, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import exampleImage from '../../assets/exampleImage.png';
import Title from '../typography/Title';
import {Container} from 'native-base';
import Body from '../typography/Body';
import {appColors} from '../../lib/colors';
import CitypingsChip from '../CitypingsChip';
import CityPingsBalance from '../CityPingsBalance';
import IconButton from '../IconButton';
import Button from '../OnboardingButton';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight * 0.3,
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
    top: 80,
  },
  contentContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  label: {
    color: appColors.primary,
  },
  title: {
    marginVertical: 20,
  },
  description: {
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

function RewardDetailModal({navigation}) {
  return (
    <Container>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={exampleImage} style={styles.image} />
          <View style={styles.imageOverlay}>
            <IconButton
              iconName="close"
              iconType="MaterialIcons"
              onPress={() => navigation.goBack()}
              size="L"
            />
            <CitypingsChip value={20} />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Body style={styles.label}>Rewards</Body>
          <Title style={styles.title}>Dagje naar artis met je vrienden</Title>
          <CityPingsBalance />
          <Body style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            gravida augue leo, vitae bibendum ipsum rhoncus eget. Etiam nec
            purus ut libero hendrerit interdum vitae at turpis. Fusce consequat
            metus lacus, vitae sodales erat sodales nec. Vestibulum varius ex ac
            tellus euismod, et sollicitudin neque commodo. Sed sed enim ligula.
            Praesent id tortor sed odio convallis imperdiet at id ex. Integer
            ultricies tincidunt eros, sed pulvinar nisl consectetur eget.
          </Body>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Body stlye={styles.balanceIndicatorText}>Nog even doorsparen !</Body>
        <Button style={styles.button} disabled label="Claim" />
      </View>
    </Container>
  );
}

export default RewardDetailModal;
