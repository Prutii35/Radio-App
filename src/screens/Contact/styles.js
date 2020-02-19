/* eslint-disable comma-dangle */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F'
  },
  mainTxtContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtContainer: {
    width: '65%',
    marginTop: 10,
    marginBottom: 10
  },
  boldTxt: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  normalTxt: {
    margin: 5,
    fontSize: 15,
    textAlign: 'center',
    color: 'white'
  },
  colorTxt: {
    margin: 5,
    fontSize: 13,
    textAlign: 'center',
    color: '#037DA3'
  },
  rowContainer: {
    width: '75%',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 30,
    height: 30
  }
});

export default styles;
