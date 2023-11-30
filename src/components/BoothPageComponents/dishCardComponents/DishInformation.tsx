import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { DishInformationProps } from '../../../interfaces/boothComponentInterfaces';

/* Displays the name, description and what allergens a dish contains*/
const DishInformation = (props: DishInformationProps) => {
  return (
    <View style={[styles.textContainer]}>
      <Text style={[styles.dishName]}>{props.name}</Text>
      <Text style={[styles.dishDescription]}>{props.description}</Text>
      <Text style={[styles.dishAllergens]}>{props.allergies}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  dishName: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 14,
  },
  dishDescription: {
    fontSize: 11,
    marginBottom: 10,
  },
  dishAllergens: {
    fontWeight: 'bold',
    fontSize: 9,
  },
});

export default DishInformation;
