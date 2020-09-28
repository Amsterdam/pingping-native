import React from 'react';
import {StyleSheet, FlatList, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from 'native-base';

import SimpleHeader from '../components/header/SimpleHeader';
import ExportImage from '../assets/export.png';
import WarningImage from '../assets/warning.png';
import TrashImage from '../assets/trashcan.png';
import AccountBlockButton from '../components/AccountBlockButton';
import {appColors} from '../config/colors';

const AccountHomeScreen = ({navigation}) => {
  const buttons = [
    {title: 'Exporteer gegevens', image: ExportImage, route: 'ExportData'},
    {title: 'Privacy', image: WarningImage, route: 'ViewPrivacy'},
    {title: 'Verwijder gegevens', image: TrashImage, route: 'DeleteData'},
  ];
  return (
    <Container style={styles.container}>
      <SimpleHeader title="Gegevens" />
      <FlatList
        data={buttons}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.flatListColumn}
        renderItem={({item}) => (
          <AccountBlockButton button={item} navigation={navigation} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.title}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  flatListColumn: {
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  container: {
    backgroundColor: appColors.almostNotBlue,
  },
});

AccountHomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AccountHomeScreen;
