import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import ShoppingCartItem from './shoppingCartComponents/ShoppingCartItem';
import OrderInfo from './shoppingCartComponents/OrderInfo';
import PageHeader from './PageHeader';

const ShoppingCartPage = () => {
  return (
    <SafeAreaView style={[styles.outerContainer]}>
      <PageHeader headerText={'Your order'} />
      <ScrollView>
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
      <OrderInfo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
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
    borderBottomWidth: 1,
  },
});

export default ShoppingCartPage;
