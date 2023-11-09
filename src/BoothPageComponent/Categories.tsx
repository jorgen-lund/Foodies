import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CategoriesProps {
  category2: string;
  category3: string;
  category4?: string;
}

const Categories = (props: CategoriesProps) => {
  return (
    <View style={[styles.categoryContainer]}>
      <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.text]}>Populære</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.text]}>{props.category2}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.text]}>{props.category3}</Text>
      </TouchableOpacity>
      {props.category4 && (
        <TouchableOpacity style={[styles.button]}>
          <Text style={[styles.text]}>{props.category4}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#32BDED',
  },
  text: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 11,
  },
  button: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Categories;
