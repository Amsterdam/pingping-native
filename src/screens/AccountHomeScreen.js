import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Content, Container} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import RouteHeader from '../components/header/RouteHeader';
import ExportImage from '../assets/export.png';
import WarningImage from '../assets/warning.png';
import TrashImage from '../assets/trashcan.png';
import AccountBlockButton from '../components/AccountBlockButton';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AccountHomeScreen = ({navigation}) => {
  const buttons = [
    {title: 'Exporteer gegevens', image: ExportImage, route: 'ExportData'},
    {title: 'Privacy', image: WarningImage, route: 'ViewPrivacy'},
    {title: 'Verwijder gegevens', image: TrashImage, route: 'DeleteData'},
  ];
  return (
    <Container>
      <RouteHeader title="Gegevens" />
      <ContentLayout>
        <Content contentContainerStyle={styles.content}>
          <FlatList
            data={buttons}
            renderItem={({item}) => (
              <AccountBlockButton button={item} navigation={navigation} />
            )}
            numColumns={2}
            keyExtractor={item => item.title}
          />
        </Content>
      </ContentLayout>
    </Container>
  );
};

export default AccountHomeScreen;
