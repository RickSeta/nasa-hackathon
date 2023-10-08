import React, { Component } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

class FloatingView extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(5);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animatedValue, {
          toValue: -5, // Move up
          duration: 2000, // Adjust the duration as needed
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.animatedValue, {
          toValue: 5, // Move down
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }

  render() {
    const { children } = this.props;
    const animatedStyle = {
      transform: [{ translateY: this.animatedValue }],
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          {children}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default FloatingView;
