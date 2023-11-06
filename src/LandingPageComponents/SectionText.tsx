import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

interface SectionTextProps{
    text: string,
    backgroundColor: string,
}

const SectionText = (props: SectionTextProps) => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={[styles.line, {backgroundColor: props.backgroundColor}]}></View>
        <Text style={[styles.text]}>{props.text}</Text>
        <View style={[styles.line, {backgroundColor: props.backgroundColor}]}></View>
      </View>
    )
}

const styles = StyleSheet.create({
    line: {
      flex: 1,
      height: 2,
      marginHorizontal: 10,
    },
    text: {
      fontFamily: "Suwannaphum-Regular",
      marginHorizontal: 10,
    }
  });

  export default SectionText