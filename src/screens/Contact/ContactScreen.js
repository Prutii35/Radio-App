/* eslint-disable comma-dangle */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight } from 'react-native';
import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';

export default class ContactScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Contact',
      headerStyle: {
        height: 50,
        backgroundColor: '#141414'
      },
      headerLeft: (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: <View />
    };
  };

  constructor(props) {
    super(props);
  }

  onPressAccount = () => {};

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.mainTxtContainer}>
          <View style={styles.txtContainer}>
            <Text style={styles.boldTxt}>Get in Touch</Text>
            <Text style={styles.normalTxt}>We would love your feedback!</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.normalTxt}>Please send us email at</Text>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressAccount()}
            >
              <Text style={styles.colorTxt}>adrian.pruti@yahoo.com</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.normalTxt}>or</Text>
            <Text style={styles.normalTxt}>You can find us on social media</Text>
          </View>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressAccount()}
            >
              <Image style={styles.icon} source={require('../../../assets/icons/twitter.png')} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressAccount()}
            >
              <Image style={styles.icon} source={require('../../../assets/icons/facebook.png')} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressAccount()}
            >
              <Image style={styles.icon} source={require('../../../assets/icons/instagram.png')} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressAccount()}
            >
              <Image style={styles.icon} source={require('../../../assets/icons/youtube.png')} />
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}
