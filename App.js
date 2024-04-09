import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 15000,
      useNativeDriver: false,
    }).start();
  }, [moonAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '90%']
  });

  const moonColor = moonAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['yellow', 'orange', 'black', 'orange', 'yellow']
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Eclipse 2024 🌒</Text>
      </View>
      <Animated.View style={[styles.moon, { left: moonLeft, backgroundColor: moonColor }]} />
      <View style={styles.sun} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: '20%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  moon: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 1,
  },
  sun: {
    position: 'absolute',
    top: '46%',
    left: '50%',
    transform: [{ translateX: -35 }, { translateY: -35 }],
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'orange',
  },
});
