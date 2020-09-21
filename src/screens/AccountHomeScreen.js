import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
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
    <Container>
      <SimpleHeader title="Gegevens" />
      <ContentLayout style={styles.content}>
        <FlatList
          data={buttons}
          renderItem={({item}) => (
            <AccountBlockButton button={item} navigation={navigation} />
          )}
          numColumns={2}
          keyExtractor={(item) => item.title}
        />
      </ContentLayout>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.almostNotBlue,
  },
});

AccountHomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AccountHomeScreen;
