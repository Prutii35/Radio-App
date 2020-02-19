/* eslint-disable comma-dangle */
import React from 'react';
import { View, Text, FlatList, Image, ScrollView, TouchableHighlight } from 'react-native';
import MenuImage from '../../components/MenuImage/MenuImage';
import { newsArray } from '../../data/dataArrays';
import styles from './styles';

export default class NewsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'News',
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

  renderItem = ({ item }) => (
    <TouchableHighlight onPress={() => this.props.navigation.navigate('NewsDetail', { item })}>
      <View style={styles.itemContainer}>
        <View style={styles.itemDateContainer}>
          <Image source={require('../../../assets/icons/clock.png')} style={styles.clock} />
          <Text style={styles.itemDate}>{item.time}</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.itemTxtContainer}>
            <Text style={styles.itemTxt}>{item.title}</Text>
          </View>
          <View style={styles.itemImgContainer}>
            <Image style={styles.itemImg} source={{ uri: item.img }} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={newsArray}
            renderItem={this.renderItem}
            extraData={this.state}
            //keyExtractor={item => `${item.id}`}
            listKey={0}
          />
        </View>
      </ScrollView>
    );
  }
}
