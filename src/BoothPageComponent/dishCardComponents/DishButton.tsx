import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface DishButtonProps {
  handleEditPress?: () => void;
  handleAddToCart?: () => void;
  handleCloseEdit?: () => void;
  MaterialIconName: string;
}

const DishButton = (props: DishButtonProps) => {
  const onPressHandler =
    props.handleAddToCart || props.handleEditPress || props.handleCloseEdit;

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={[styles.buttonContainer]}>
        <MaterialIcons name={props.MaterialIconName} size={28} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
export default DishButton;
