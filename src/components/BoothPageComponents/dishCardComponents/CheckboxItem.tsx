import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CheckboxItemProps } from '../../../interfaces/boothComponentInterfaces';

/** ______THIS COMPONENT IS NOT YET BEING USED_____ 
    Will be used when editing / adding extras to a dish,
*/

const CheckboxItem = (props: CheckboxItemProps) => {
  return (
    <View style={[styles.extraItemContainer]}>
      <View style={[styles.boxAndNameContainer]}>
        <CheckBox
          boxType="square"
          onAnimationType="one-stroke"
          animationDuration={0.1}
          onCheckColor={'#ED6232'}
          onTintColor="grey"
          tintColor={'grey'}
          lineWidth={2}
        />
        <Text style={{paddingLeft: 5,}}>{props.itemName}</Text>
      </View>
      <Text style={{fontSize: 16, fontWeight: '500'}}>{props.price} kr</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  extraItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  boxAndNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  textSize: {
    fontSize: 14,
  },
});

export default CheckboxItem;
