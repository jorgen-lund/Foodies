import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CategoriesProps} from '../interfaces/interfaces';

const Categories = (props: CategoriesProps) => {
  const resetCategoryStates = () => {
    props.setShowCategory1(false);
    props.setShowCategory2(false);
    props.setShowAll(false);
    if (props.setShowCategory3) {
      props.setShowCategory3(false);
    }
  };

  const choosenCategory = (name: string) => {
    resetCategoryStates();
    if (name === props.category1) {
      props.setShowCategory1(true);
    } else if (name === props.category2) {
      props.setShowCategory2(true);
    } else if (props.setShowCategory3 && name === props.category3) {
      props.setShowCategory3(true);
    } else {
      props.setShowAll(true);
    }
  };
  
  return (
    <View style={[styles.categoryContainer]}>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => choosenCategory('All')}>
        <Text style={[styles.text]}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => choosenCategory(props.category1)}>
        <Text style={[styles.text]}>{props.category1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => choosenCategory(props.category2)}>
        <Text style={[styles.text]}>{props.category2}</Text>
      </TouchableOpacity>
      {props.category3 && (
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => props.category3 && choosenCategory(props.category3)}>
          <Text style={[styles.text]}>{props.category3}</Text>
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
