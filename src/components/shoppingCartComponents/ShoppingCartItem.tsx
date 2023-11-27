import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {ShoppingCartItemProps} from '../../interfaces/interfaces';
import {useSelector, useDispatch} from 'react-redux';
import {decrementItem, incrementItem} from '../../redux/shoppingCartSlice';
import {shoppingCartState} from '../../redux/store';

const ShopppingCartItem = (props: ShoppingCartItemProps) => {
  const dispatch = useDispatch();

  const item = useSelector((state: shoppingCartState) =>
    state.shoppingCart.find(item => item.id === props.id),
  );
  const amount = item ? item.amount : 0;
  const price = item ? item.price : 0;

  const increaseAmount = () => {
    dispatch(incrementItem({id: props.id}));
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      dispatch(decrementItem({id: props.id}));
    }
  };

  return (
    <View style={[styles.itemContainer]}>
      <View>
        <View style={[styles.dishAndAmountContainer]}>
          <Text style={[styles.dishText]}>{props.dishName}</Text>
          <View style={[styles.toggleAmountContainer]}>
            <TouchableOpacity onPress={decreaseAmount}>
              <View style={[styles.increaseButtonSize]}>
                <FeatherIcons name={'minus-circle'} size={25} />
              </View>
            </TouchableOpacity>
            <Text style={[styles.dishText]}>{amount}</Text>
            <TouchableOpacity onPress={increaseAmount}>
              <View style={[styles.increaseButtonSize]}>
                <FeatherIcons name={'plus-circle'} size={25} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={[styles.priceText]}>{price} kr</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {marginHorizontal: 20, borderBottomWidth: 1},
  dishAndAmountContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    alignContent: 'center',
  },
  dishText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  toggleAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  increaseButtonSize: {
    justifyContent: 'center',
    height: 50,
    width: 50,
    alignItems: 'center',
  },
  priceText: {
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: -10,
    paddingBottom: 5,
  },
});
export default ShopppingCartItem;
