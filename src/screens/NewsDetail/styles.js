/* eslint-disable comma-dangle */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row'
  },
  btnIcon: {
    alignSelf: 'center',
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 5
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  container: {
    flex: 1
  },
  imgContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  itemTxtContainer: {
    width: '70%',
    position: 'absolute',
    top: '30%',
    alignSelf: 'center'
  },
  itemTxt: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'FallingSky',
    textAlign: 'center'
  },
  itemImg: {
    width: '100%',
    height: 250
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.60)',
    height: 250,
    ...StyleSheet.absoluteFillObject
  },
  itemDateContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    backgroundColor: 'lightgrey'
  },
  clock: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 10
  },
  itemDate: {
    justifyContent: 'center'
  },
  txtContainer: {
    width: '90%',
    alignSelf: 'center',
    margin: 10
  },
  itemMainTxt: {
    fontFamily: 'FallingSky',
    color: 'grey',
    fontSize: 16,
    letterSpacing: 0.5
  }
});

export default styles;
