import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { CategoryButtonProps } from '../interfaces/interfaces';

const CategoryButton = (props: CategoryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <View style={[props.isActive && styles.activeBorder]}>
        <Text style={[styles.text, props.isActive && styles.activeText]}>
          {props.categoryName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 14,
  },
  activeText: {
    color: '#ED6232',
  },
  activeBorder: {
    borderColor: 'white',
    borderBottomColor: '#ED6232',
    borderWidth: 2,
  },
  button: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoryButton;
