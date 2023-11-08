import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Categories = () => {
  return (
    <View style={[styles.categoryContainer]}>
      <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.text]}>Populære</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.text]}>Pizza</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.text]}>Pasta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.text]}>Dessert</Text>
      </TouchableOpacity>
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
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default Categories;
