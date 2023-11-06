import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import foodCartIcon from './foodCartIcon';

const {height} = Dimensions.get('window');

const Logo = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.blackBackgroundContainer]}>
        <Text style={[styles.header]}>FOODIES</Text>
        <View style={[styles.logoView]}>
          <SvgXml xml={foodCartIcon} width="80" height="80" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '28%',
  },
  blackBackgroundContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    transform: [{skewY: '10deg'}],
    height: '250%',
    top: height * -0.34,
  },
  header: {
    color: '#ED6232',
    fontSize: 20,
    transform: [{skewY: '-10deg'}],
    fontFamily: 'Suwannaphum-Regular',
    marginBottom: -12,
  },
  logoView: {
    transform: [{skewY: '-10deg'}],
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default Logo;
