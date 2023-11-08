import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import ShoppingCartItem from './shoppingCartComponents/ShoppingCartItem';

const ShoppingCartPage = () => {
  return (
    <SafeAreaView style={[styles.outerContainer]}>
      <ScrollView >
        <View style={[styles.container]}>
          <Text style={[styles.text]}>Din ordre</Text>
        </View>
        <View style={[styles.innerContainer]}>
          <View style={[styles.waitingTimeContainer]}>
            <FeatherIcons name={'clock'} size={30} />
            <Text style={[styles.waitingTimeText]}>
              Estimert ventetid: 20min
            </Text>
          </View>
        </View>
        <ShoppingCartItem dishName={'Diavola'} price={160} amount={1} />
        <ShoppingCartItem dishName={'Pasta Bolognese'} price={150} amount={1} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ED6232',
    height: 80,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 22,
    color: 'white',
  },
  waitingTimeText: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 16,
    marginLeft: 10,
  },
  waitingTimeContainer: {
    flexDirection: 'row',
  },
  innerContainer: {
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1
  },
});

export default ShoppingCartPage;
