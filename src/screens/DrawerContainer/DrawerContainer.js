/* eslint-disable comma-dangle */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="Listen"
            source={require('../../../assets/icons/listen.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="News"
            source={require('../../../assets/icons/news.png')}
            onPress={() => {
              navigation.navigate('News');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Contact"
            source={require('../../../assets/icons/contact.png')}
            onPress={() => {
              navigation.navigate('Contact');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
