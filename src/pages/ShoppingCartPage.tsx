import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ShoppingCartItem from '../components/shoppingCartComponents/ShoppingCartItem';
import OrderInfo from '../components/shoppingCartComponents/OrderInfo';
import PageHeader from '../components/PageHeader';
import {useSelector, useDispatch} from 'react-redux';
import {shoppingCartState} from '../redux/store';
import {OrderItem, clearCart} from '../redux/shoppingCartSlice';
import {createReceiptData} from '../receiptUtils';
import {deactivatePreviousReceipt, postReceiptData} from '../apiCalls/api';
import emitter from '../receiptUtils';

const ShoppingCartPage = () => {
  const [isTakeaway, setIsTakeaway] = useState(false);

  const shoppingCart = useSelector(
    (state: shoppingCartState) => state.shoppingCart,
  );
  const dispatch = useDispatch();

  /* When the user "pays" it checks that shoppingCart is not empty, deactivates
    previos receipt by updating isActive = false. 
    Then a new receipt is created using the items in the shoppingCart which is 
    posted to the mock db. An event is then run to let receiptPage know a new 
    receipt has been made, and that it should rerender the page. Then clears 
    the cart. The ts-error on newReceiptData has not been prioritized */
  const handlePayButtonClick = async () => {
    if (totalPrice > 0) {
      await deactivatePreviousReceipt();
      const newReceiptData = createReceiptData(shoppingCart, isTakeaway);
      await postReceiptData(newReceiptData);
      emitter.emit('purchase-made');
      dispatch(clearCart());
    }
  };

  /* Calculates the total price of the cart.
     reduce() iterates over every item in the cart, and adds its price to the total.
     The 0 means that it should display zero when the cart is empty.
   */
  const totalPrice = shoppingCart.reduce(
    (total, item) => total + item.price,
    0,
  );

  return (
    <SafeAreaView style={[styles.outerContainer]}>
      <PageHeader headerText={'Your order'} />
      <ScrollView>
        {shoppingCart.map((item: OrderItem) => (
          <ShoppingCartItem
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </ScrollView>
      <OrderInfo
        totalPrice={totalPrice}
        onPress={handlePayButtonClick}
        setIsTakeaway={setIsTakeaway}
      />
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
