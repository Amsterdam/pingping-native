import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from 'native-base';
import SimpleHeader from '../components/header/SimpleHeader';
import ExportImage from '../assets/export.png';
import WarningImage from '../assets/warning.png';
import TrashImage from '../assets/trashcan.png';
import AccountBlockButton from '../components/account/AccountBlockButton';
import {appColors} from '../config/colors';
import {testIDs} from '../../e2e/modulesTestIDs';

const AccountHomeScreen = ({navigation}) => {
  const buttons = [
    {
      title: 'Exporteer gegevens',
      image: ExportImage,
      route: 'ExportData',
      testID: testIDs.ACCOUNT.EXPORT_DATA_BUTTON,
    },
    {
      title: 'Privacy',
      image: WarningImage,
      route: 'ViewPrivacy',
      testID: testIDs.ACCOUNT.VIEW_PRIVACY_BUTTON,
    },
    {
      title: 'Verwijder gegevens',
      image: TrashImage,
      route: 'DeleteData',
      testID: testIDs.ACCOUNT.DELETE_DATA_BLOCK_BUTTON,
    },
  ];
  return (
    <Container style={styles.container} testID={testIDs.ACCOUNT.SCREEN}>
      <SimpleHeader title="Gegevens" />
      <FlatList
        data={buttons}
        contentContainerStyle={styles.flatList}
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
  flatList: {
    backgroundColor: appColors.almostNotBlue,
    marginTop: 12,
  },
});

AccountHomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AccountHomeScreen;
