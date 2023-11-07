import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface DishButtonProps {
  handleEditPress?: () => void;
}

const DishButtons = (props: DishButtonProps) => {
  return (
    <View style={[styles.iconsContainer]}>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity onPress={props.handleEditPress}>
          <MaterialIcons name={'edit'} size={28} />
        </TouchableOpacity>
      </View>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity>
          <MaterialIcons name={'add-shopping-cart'} size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 40,
    width: 40,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});
export default DishButtons;
