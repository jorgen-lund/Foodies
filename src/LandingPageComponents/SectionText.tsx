import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SectionTextProps {
  text: string;
  backgroundColor: string;
}

const SectionText = (props: SectionTextProps) => {
  return (
    <View style={[styles.container]}>
      <View
        style={[styles.line, {backgroundColor: props.backgroundColor}]}></View>
      <Text style={[styles.text]}>{props.text}</Text>
      <View
        style={[styles.line, {backgroundColor: props.backgroundColor}]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', paddingBottom: 10},
  line: {
    flex: 1,
    height: 2,
    marginHorizontal: 20,
  },
  text: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 12,
    marginHorizontal: 8,
  },
});

export default SectionText;
