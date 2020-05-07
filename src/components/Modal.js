import React from 'react';
import {Modal, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useQuery, useMutation} from '@apollo/client';
import {Button, Icon} from 'native-base';
import Title from './typography/Title';
import Body from './typography/Body';
import MoneyBill from './svgComponents/MoneyBill';
import CityPingsLogo from './svgComponents/CityPings';
import {ppBaseColors} from '../lib/colors';
import GET_MODAL_STATE from '../apollo/Query/getModalState';
import TOGGLE_MODAL from '../apollo/Mutation/toggleModal';

const ModalPP = ({navigation}) => {
  const {
    data: {modalOpen, pings},
  } = useQuery(GET_MODAL_STATE);

  const [toggleModal] = useMutation(TOGGLE_MODAL);

  const doNavigation = () => {
    toggleModal();
    navigation.navigate('CityPings', {screen: 'CityPingsHome'});
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalOpen}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Button
              rounded
              transparent
              style={styles.closeButton}
              onPress={() => toggleModal()}>
              <Icon name="close" type="AntDesign" style={styles.icon} />
            </Button>
            <Title style={styles.mainTitle} align="center">
              Top! <Title>je hebt {pings} City Pings verdiend </Title>
            </Title>
            <MoneyBill style={styles.spacer} />
            <View style={styles.logoContainer}>
              <View style={styles.logoSubContainer}>
                <CityPingsLogo />
                <Title style={styles.cityPingsValue}>{pings}</Title>
              </View>
              <Title align="center" style={styles.cityPingsLabel}>
                City Pings
              </Title>
            </View>
            <Body align="center">
              Gefeliciteerd, je hebt {pings} City Pings verdiend. Hierdoor kan
              je meteen je eerste reward verzilveren! Ga naar “claim je reward".
            </Body>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={doNavigation}>
              <Title style={styles.buttonLabel}>bekijk mijn citypings</Title>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1,1,1,0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalContainer: {
    padding: 35,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
  mainTitle: {color: ppBaseColors.PP_GOLD},
  spacer: {marginVertical: 20},
  logoContainer: {
    justifyContent: 'center',
    marginVertical: 20,
  },
  logoSubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  cityPingsValue: {
    color: ppBaseColors.PP_GOLD,
    fontSize: 50,
    marginLeft: 20,
  },
  cityPingsLabel: {color: ppBaseColors.PP_GRAY, fontSize: 20},
  buttonContainer: {
    backgroundColor: ppBaseColors.PP_GOLD,
    marginTop: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buttonLabel: {
    fontSize: 18,
    color: '#fff',
    padding: 20,
  },
});

export default ModalPP;
