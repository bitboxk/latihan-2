/**
containerApp
 */
'use strict';

import React, { Component} from 'react';
import {
  AppRegistry, 
  Text,
  TextInput,
  View,
  StyleSheet
} from 'react-native';

const mainApp = () => {
  const name = 'Pemrograman Mobile';

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer} />
      <Text style={styles.title}>
        <Text style={styles.subtitle}>Materi</Text> {name}
      </Text>
        <Text style={styles.content}>Selamat Datang</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 150,
    backgroundColor: '#E0F2F1',
    borderRadius: 5,
  },
  content:{
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: '#009688',
    height: 80,
        borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: 'white',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 30,
    left: 50,
  },
  subtitle: {
    fontWeight: 'bold',
  },
});

export default mainApp;