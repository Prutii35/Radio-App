/* eslint-disable comma-dangle */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F'
  },
  header: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center'
  },
  secTxt: { textAlign: 'center', fontSize: 16, color: 'white' },
  mainTxt: { textAlign: 'center', fontSize: 20, color: 'white' },
  btnsContainer: {
    marginTop: 40,
    marginBottom: 40
  },
  btnContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#037DA3',
    borderRadius: 60,
    width: 60,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  btn: {
    alignSelf: 'center',
    width: 30,
    height: 30
  },
  soundContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  soundIcon: {
    justifyContent: 'center',
    width: 25,
    height: 25
  },
  modalContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 40,
    borderRadius: 10
  },
  input: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 17,
    marginBottom: 10,
    textAlign: 'center'
  },
  modalTxtContainer: {
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  modalTxt: {
    color: 'black',
    fontSize: 17
  },
  closeIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  closeIcon: {
    width: 15,
    height: 15
  }
});

export default styles;
