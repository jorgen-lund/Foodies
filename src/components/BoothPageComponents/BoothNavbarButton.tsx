import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { BoothNavbarButtonProps } from '../../interfaces/boothComponentInterfaces';

/**  Styles the ooth-navigation buttons, and increases their touchable area*/
const BoothNavbarButton = (props: BoothNavbarButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonSize]}>
      <View style={[styles.buttonContainer]}>
        <Text
          style={[
            styles.text,
            props.boothName === props.activeBoothName && styles.highlightedText,
          ]}>
          {props.boothName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSize: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 17,
  },
  highlightedText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default BoothNavbarButton;
