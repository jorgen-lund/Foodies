import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import ShoppingCartItem from '../components/shoppingCartComponents/ShoppingCartItem';
import OrderInfo from '../components/shoppingCartComponents/OrderInfo';
import PageHeader from '../components/PageHeader';
import {useSelector} from 'react-redux';
import {shoppingCartState} from '../redux/store';
import {Order} from '../redux/shoppingCartSlice';
import {useTranslation} from 'react-i18next';

const ShoppingCartPage = () => {
  const shoppingCart = useSelector(
    (state: shoppingCartState) => state.shoppingCart,
  );
  const {t} = useTranslation();

  return (
    <SafeAreaView style={[styles.outerContainer]}>
      <PageHeader headerText={'Your order'} />
      <ScrollView>
        {shoppingCart.map((item: Order) => (
          <ShoppingCartItem
            id={item.id}
            key={item.id}
            dishName={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
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
