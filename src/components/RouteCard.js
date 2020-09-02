import React, {memo} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import {BASE_URL} from '../lib/initialSettings';
import Title from './typography/Title';
import Body from './typography/Body';
import commonStyles from '../lib/commonStyles';
import {ppBaseColors, appColors} from '../lib/colors';
import CitypingsChip from '../components/CitypingsChip';

const BORDER_RADIUS = 5;
const MARGIN = 15;

const styles = StyleSheet.create({
  paper: {
    ...commonStyles.shadow,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
    marginVertical: 10,
  },
  imageContainer: {
    position: 'relative',
    height: 125,
    borderRadius: BORDER_RADIUS,
  },
  image: {
    flex: 1,
    width: '100%',
    position: 'relative',
    height: '100%',
    borderTopRightRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
  },
  overlayTop: {position: 'absolute', padding: 15, top: 0, right: 10},
  descriptionContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: MARGIN,
  },
  rewardType: {
    color: appColors.primary,
    marginBottom: 20,
  },
  savings: {
    color: appColors.subtleGrey,
  },
  balanceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  saldo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const RouteCard = ({
  navigation,
  lifeEvent: {
    routeId,
    totalPoints,
    targetAudience,
    title,
    description,
    numberOfSteps,
    progress,
    coverImageUrl,
  },
}) => {
  return (
    <View style={styles.paper}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('LifeEventDetailsScreen', {
            routeId,
          })
        }>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: `${BASE_URL}${coverImageUrl}`}}
              style={styles.image}
            />
            <View style={styles.overlayTop}>
              <CitypingsChip value={totalPoints} />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Body style={styles.rewardType}>{targetAudience}</Body>
            <Title style={styles.title}>{title}</Title>
            <Body style={styles.description}>{description}</Body>
            <View style={styles.balanceContainer}>
              <View style={styles.saldo}>
                <Body
                  style={styles.savings}
                  ellipsizeMode="tail"
                  numberOfLines={3}>
                  {numberOfSteps} stappen
                </Body>
              </View>
              <ProgressBar
                progress={progress}
                width={50}
                color={appColors.secondary}
                unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
                borderWidth={0}
                height={10}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

RouteCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  lifeEvent: PropTypes.object.isRequired,
};

export default memo(RouteCard);
