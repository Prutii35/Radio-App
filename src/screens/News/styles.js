/* eslint-disable comma-dangle */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F'
  },
  itemContainer: {
    width: '100%',
    padding: 20,
    marginTop: 5,
    marginBottom: 5
  },
  itemDateContainer: {
    flexDirection: 'row'
  },
  clock: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    marginRight: 10
  },
  itemDate: {
    marginBottom: 10,
    justifyContent: 'center',
    color: '#037DA3',
    fontSize: 13
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemTxtContainer: {
    width: '70%',
    alignSelf: 'center'
  },
  itemTxt: {
    color: 'white',
    fontSize: 16
  },
  itemImgContainer: {
    width: '25%',
    alignSelf: 'flex-end'
  },
  itemImg: {
    height: 50,
    width: '100%',
    maxWidth: 100,
    alignSelf: 'flex-end'
  }
});

export default styles;
