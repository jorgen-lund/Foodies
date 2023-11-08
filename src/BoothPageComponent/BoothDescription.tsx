import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const italyBooth = require('../../images/italyBooth.png');

const BoothDescription = () => {
  return (
    <View>
      <View style={[styles.infoContainer]}>
        <Image source={italyBooth} style={[styles.image]} />
        <Text style={[styles.name]}>Italian</Text>
      </View>
      <Text style={[styles.description]}>
        Serverer mat fra min families autentiske italienske oppskrifter gjennom
        generasjoner. Hver rett lages med kjærlighet.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    height: 170,
    justifyContent: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Suwannaphum-Black',
  },
  description: {
    alignItems: 'center',
    fontFamily: 'Suwannaphum-Regular',
    paddingHorizontal: 16,
    paddingTop: 10,
    fontSize: 12,
  },
});

export default BoothDescription;
