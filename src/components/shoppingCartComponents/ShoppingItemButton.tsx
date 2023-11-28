import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

interface ShoppingItemButtonProps {
  name: string;
  size: number;
  color: string;
  onPress: () => void;
  isRemoveButton: boolean;
}

const ShoppingItemButton = (props: ShoppingItemButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.increaseButtonSize, props.isRemoveButton && {alignItems: 'flex-start'}]}>
        <AntDesignIcons name={props.name} size={props.size} color={props.color} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  increaseButtonSize: {
    justifyContent: 'center',
    height: 40,
    width: 40,
    alignItems: 'center',
  },
});

export default ShoppingItemButton
