import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface CheckboxItemProps {
  itemName: string;
  price: number;
}

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
