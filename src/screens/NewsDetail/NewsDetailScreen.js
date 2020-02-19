/* eslint-disable comma-dangle */
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './styles';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class NewsDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        height: 50,
        backgroundColor: '#1F1F1F'
      },
      headerLeft: (
        <TouchableHighlight
          onPress={() => navigation.goBack()}
          underlayColor="rgba(128, 128, 128, 0.1)"
        >
          <View style={styles.btnContainer}>
            <Image source={require('../../../assets/icons/backArrow.png')} style={styles.btnIcon} />
            <Text style={styles.btnText}>News</Text>
          </View>
        </TouchableHighlight>
      ),
      headerRight: <View />
    };
  };
  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: item.img }} style={styles.itemImg} />
          <View style={styles.overlay} />
          <View style={styles.itemTxtContainer}>
            <Text style={styles.itemTxt}>{item.title}</Text>
          </View>
        </View>
        <View style={styles.itemDateContainer}>
          <Image source={require('../../../assets/icons/clock.png')} style={styles.clock} />
          <Text style={styles.itemDate}>{item.date}</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.itemMainTxt}>{item.txt}</Text>
        </View>
      </ScrollView>
    );
  }
}
