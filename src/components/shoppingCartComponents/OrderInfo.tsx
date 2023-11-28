import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {shoppingCartState} from '../../redux/store';

const OrderInfo = () => {
  const shoppingCart = useSelector((state: shoppingCartState) => state.shoppingCart);

  /**Calculates the total price of the cart.
   * reduce() iterates over every item in the cart, and adds its price to the total.
   * The 0 means that it should display zero when the cart is empty.
   */
  const totalPrice = shoppingCart.reduce((total, item) => total + item.price, 0);

  return (
    <View style={[styles.outerContainer]}>
      <View style={[styles.takeAwayContainer]}>
        <CheckBox
          boxType="square"
          onAnimationType="one-stroke"
          animationDuration={0.1}
          onCheckColor={'black'}
          onTintColor="black"
          tintColor={'black'}
          lineWidth={2}
        />
        <Text style={[styles.takeAwayText]}>Takeaway</Text>
      </View>
      <View style={[styles.totalPriceContainer]}>
        <Text style={[styles.totalPriceText]}>
          Total price: {totalPrice} kr
        </Text>
      </View>
      <TouchableOpacity>
        <View style={[styles.buttonContainer]}>
          <FeatherIcons name={'credit-card'} size={28} color={'white'} />
          <Text style={[styles.buttonText]}>Betal</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 20,
  },
  takeAwayContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  takeAwayText: {
    fontSize: 22,
    paddingLeft: 15,
  },
  totalPriceContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBlockColor: '#32BDED',
  },
  totalPriceText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
  buttonContainer: {
    backgroundColor: '#ED6232',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  buttonText: {
    fontFamily: 'Suwannaphum-Black',
    color: 'white',
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default OrderInfo;
