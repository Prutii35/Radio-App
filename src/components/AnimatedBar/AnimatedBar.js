/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import { Animated } from 'react-native';
import randomcolor from 'randomcolor';

class AnimatedBar extends Component {
  constructor(props) {
    super(props);

    this.height = new Animated.Value(80);
    this.state = {
      color: randomcolor()
    };
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    this.animateTo(nextProps.delay, nextProps.value);
  }

  animateTo = (delay, value) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this.height, {
        toValue: value
      })
    ]).start();
  };

  render() {
    const barStyles = {
      backgroundColor: '#1F1F1F', //this must be the same as screen background
      height: this.height,
      width: 10

      //borderBottomRightRadius: 4,
      //borderBottomLeftRadius: 4
    };

    const containerStyle = {
      //backgroundColor: this.state.color,
      backgroundColor: '#037DA3',
      width: 10,
      height: 80,
      marginLeft: 2,
      marginRight: 2
      //borderBottomRightRadius: 4,
      //borderBottomLeftRadius: 4
    };

    return (
      <Animated.View style={containerStyle}>
        <Animated.View style={barStyles} />
      </Animated.View>
    );
  }
}

export default AnimatedBar;
