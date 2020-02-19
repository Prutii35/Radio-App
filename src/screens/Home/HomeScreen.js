/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native';
import MenuImage from '../../components/MenuImage/MenuImage';
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal';
import styles from './styles';
import AnimatedBar from '../../components/AnimatedBar/AnimatedBar';

const window = Dimensions.get('window');
const DELAY = 80;

var Sound = require('react-native-sound');
// Enable playback in silence mode
Sound.setCategory('Playback');
// Load the sound file 'player.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var player = new Sound('http://89.37.58.103:8000/europafm_mp3_64k', Sound.MAIN_BUNDLE, error => {
  if (error) {
    alert('failed to load the sound', error);
    return;
  }
  // loaded successfully
  /*
  alert(
    'duration in seconds: ' +
      player.getDuration() +
      'number of channels: ' +
      player.getNumberOfChannels()
  );
*/
  // Play the sound with an onEnd callback
  player.setVolume(0.5);
  player.play(success => {
    if (success) {
      alert('successfully finished playing');
    } else {
      alert('playback failed due to audio decoding errors');
    }
  });
});

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Home',
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
      headerRight: (
        <TouchableHighlight onPress={() => params.onPressAdd()}>
          <Image
            style={{ width: 25, height: 25, marginRight: 10 }}
            source={require('../../../assets/icons/add.png')}
          />
        </TouchableHighlight>
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true,
      volume: 0.5,
      visibleModal: false,
      url: '',
      workingUrl: 'http://89.37.58.103:8000/europafm_mp3_64k',
      //
      data: []
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onPressAdd: this.onPressAdd
    });

    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 800);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateData = () => {
    const data = [];
    for (let i = 0; i < Math.floor(window.width / 21); i++) {
      // Math.floor(window.width / 14) 14 = bar width
      data.push(Math.floor(Math.random() * 80));
    }
    this.setState({
      data: data
    });
  };

  initializeArray = value => {
    var arr = [];
    for (var i = 0; i < this.state.data.length; i++) {
      arr[i] = value;
    }
    this.setState({
      data: arr
    });
  };

  onPressButton = () => {
    if (this.state.isPlaying) {
      this.setState({
        isPlaying: false
      });
      player.pause();
      clearInterval(this.interval);
      this.initializeArray(79);
    } else {
      this.setState({
        isPlaying: true
      });
      player.play();
      this.interval = setInterval(() => {
        this.generateData();
      }, 500);
    }
  };

  onPressAdd = () => {
    this.toggleModal();
    this.handleChangeTxt('');
  };

  onPressDone = () => {
    this.toggleModal();
    player.release();
    player = new Sound(this.state.url, Sound.MAIN_BUNDLE, error => {
      if (error) {
        alert('Failed to load the sound, make sure that the URL is valid', error);
        return;
      }
      // loaded successfully

      // Play the sound with an onEnd callback
      player.setVolume(0.5);
      player.play(success => {
        if (success) {
          alert('Successfully finished playing');
        } else {
          alert('Playback failed due to audio decoding errors');
        }
      });
    });
  };

  onSoundChange = value => {
    this.setState({ volume: value });
    player.setVolume(value);
  };

  toggleModal = () => {
    this.setState(prevState => ({
      visibleModal: !prevState.visibleModal
    }));
  };

  handleChangeTxt = txt => {
    this.setState({ url: txt });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.img} source={require('../../../assets/images/music.jpg')} />
          <Text style={styles.secTxt}>Directia 5 feat. Lidia Buble - Forever Young</Text>
          <Text style={styles.mainTxt}>Jazz FM</Text>
        </View>

        <View
          style={{ flexDirection: 'row', marginTop: 70, marginBottom: 40, alignSelf: 'center' }}
        >
          {this.state.data.map((value, index) => (
            <AnimatedBar value={value} delay={DELAY * index} key={index} />
          ))}
        </View>

        <View style={styles.btnsContainer}>
          <View style={styles.soundContainer}>
            <TouchableHighlight
              onPress={() =>
                this.state.volume != 0 ? this.onSoundChange(0) : this.onSoundChange(0.5)
              }
            >
              <Image
                style={styles.soundIcon}
                source={
                  this.state.volume == 0
                    ? require('../../../assets/icons/muteSound.png')
                    : require('../../../assets/icons/lowSound.png')
                }
              />
            </TouchableHighlight>
            <View
              style={{
                width: '80%',
                justifyContent: 'center',
                alignSelf: 'center'
              }}
            >
              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={1}
                value={this.state.volume}
                minimumTrackTintColor="#037DA3"
                maximumTrackTintColor="#FFFFFF"
                thumbTintColor="#FFFFFF"
                onValueChange={value => this.onSoundChange(value)}
              />
            </View>
            <TouchableHighlight onPress={() => this.onSoundChange(1)}>
              <Image
                style={styles.soundIcon}
                source={require('../../../assets/icons/highSound.png')}
              />
            </TouchableHighlight>
          </View>
          <TouchableHighlight style={styles.btnContainer} onPress={() => this.onPressButton()}>
            <Image
              source={
                this.state.isPlaying
                  ? require('../../../assets/icons/pause.png')
                  : require('../../../assets/icons/play.png')
              }
              style={styles.btn}
            />
          </TouchableHighlight>
        </View>
        <Modal isVisible={this.state.visibleModal}>
          <View style={styles.modalContainer}>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.toggleModal()}
              style={styles.closeIconContainer}
            >
              <Image
                style={styles.closeIcon}
                source={require('../../../assets/icons/closeIcon.png')}
              />
            </TouchableHighlight>
            <TextInput
              placeholder="Type in stream URL..."
              style={styles.input}
              onChangeText={text => this.setState({ url: text })}
              value={this.state.url}
            />

            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => this.onPressDone()}
              style={styles.modalTxtContainer}
            >
              <Text style={styles.modalTxt}>Done</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}
