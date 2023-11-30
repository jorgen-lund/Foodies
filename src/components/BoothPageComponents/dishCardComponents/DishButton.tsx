import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DishButtonProps } from '../../../interfaces/boothComponentInterfaces';

/* Styling of a DishButton. At the moment only used for add-dish-to-cart
   button. Later for edit-dish and hide-extras buttons as well */
const DishButton = (props: DishButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonIncrease]}>
      <View style={[styles.buttonContainer]}>
        <MaterialIcons name={props.MaterialIconName} size={28} color={"white"}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "flex-end",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 10,
    height: 35,
    width: 35,
    shadowColor: '#000',
    backgroundColor: '#ED6232',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonIncrease: {
    flex: 1,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DishButton;
