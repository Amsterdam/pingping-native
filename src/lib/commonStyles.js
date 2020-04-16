import {StyleSheet, Dimensions} from 'react-native';

const commonStyles = StyleSheet.create({
  logoFont: {
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 3,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Heavitas',
  },
  subTitle: {
    fontSize: 40,
    letterSpacing: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Heavitas',
    marginTop: 30,
  },
  buttonStyle: {
    width: Dimensions.get('window').width - 60,
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 14,
  },
  title: {
    fontFamily: 'Heavitas',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
  },
});

export default commonStyles;
