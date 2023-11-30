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
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '../navigationFiles/navigationTypes';

/** Displays all the dishes in redux' globally accessible shoppingCart, 
 *  and creates an order / receipt by clicking the pay button.
*/
const ShoppingCartPage = () => {
  const [isTakeaway, setIsTakeaway] = useState(false);
  const navigation = useNavigation<RootNavigationProp>();

  const shoppingCart = useSelector(
    (state: shoppingCartState) => state.shoppingCart,
  );
  const dispatch = useDispatch();

  const redirectToReceiptPage = () => {
    navigation.navigate("Receipts");
  }

  /* Checks that the shopping cart is not empty before executing the commands:
  1) Deactivates current active receipt by sending a patch request saying
    isActive = false
  2) Creates a new receipt of the dishes inside, and checks if takeaway is 
    checked 
  3) Sends a post request with this receipt
  4) Runs an event that purchase has been made. Is used for receiptPage to 
    know a new receipt has been made, and it should rerender the component
  5) Clears the redux state of the cart, so it is now empty 
  6) Redirects the user to the receipt page */
  const handlePayButtonClick = async () => {
    if (totalPrice > 0) {
      await deactivatePreviousReceipt();
      const newReceiptData = createReceiptData(shoppingCart, isTakeaway);
      await postReceiptData(newReceiptData);
      emitter.emit('purchase-made');
      dispatch(clearCart());
      redirectToReceiptPage();
    }
  };

  /* Calculates the total price of the cart.
     reduce() iterates over every item in the cart, and adds its price to the total.
     The 0 means that it should display zero when the cart is empty. Sends the amount 
     to the OrderInfo component.
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
