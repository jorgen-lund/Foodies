import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import foodCartIcon from '../foodCartIcon';

const {height} = Dimensions.get('window');

const Logo = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.blackBackgroundContainer]}>
        <Text style={[styles.header]}>FOODIES</Text>
        <View style={[styles.logoView]}>
          <SvgXml xml={foodCartIcon} width="90" height="90" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '30%',
  },
  blackBackgroundContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    transform: [{skewY: '10deg'}],
    height: '130%',
    top: height * -0.1,
  },
  header: {
    color: '#ED6232',
    fontSize: 18,
    transform: [{skewY: '-10deg'}],
    fontFamily: 'Suwannaphum-Regular',
  },
  logoView: {
    transform: [{skewY: '-10deg'}],
    marginBottom: 10,
  },
});

export default Logo;
