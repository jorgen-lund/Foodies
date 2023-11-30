import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { SectionTextProps } from '../../interfaces/landingPageInterfaces';


/* Component for adding some extra styling to the 
   home page's section texts. Accepts text and color*/
const SectionText = (props: SectionTextProps) => {
  let hasText: boolean = false;
  if (props.text) {
    hasText = true;
  }

  return (
    <View style={[styles.container]}>
      <View
        style={[styles.line,
          {backgroundColor: props.backgroundColor, marginHorizontal: 20}]}>
      </View>
      <Text style={[styles.text]}>{props.text}</Text>
      <View
        style={[styles.line,
          {backgroundColor: props.backgroundColor, marginHorizontal: 20}]}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', paddingBottom: 10},
  line: {
    flex: 1,
    height: 2,
  },
  text: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 14,
    marginHorizontal: 8,
  },
});

export default SectionText;
