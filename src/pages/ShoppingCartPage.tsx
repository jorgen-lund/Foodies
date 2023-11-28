import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import ShoppingCartItem from '../components/shoppingCartComponents/ShoppingCartItem';
import OrderInfo from '../components/shoppingCartComponents/OrderInfo';
import PageHeader from '../components/PageHeader';
import {useSelector} from 'react-redux';
import {shoppingCartState} from '../redux/store';
import { Order } from '../redux/shoppingCartSlice';

const ShoppingCartPage = () => {
  const shoppingCart = useSelector((state: shoppingCartState) => state.shoppingCart);

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
        {/*Here I have to map over the state list which is in redux, along with the extras*/}
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
