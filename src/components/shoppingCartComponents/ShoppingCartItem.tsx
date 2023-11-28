import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {ShoppingCartItemProps} from '../../interfaces/interfaces';
import {useSelector, useDispatch} from 'react-redux';
import {decrementItem, incrementItem, removeItem} from '../../redux/shoppingCartSlice';
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

  const removeDish = () => {
    dispatch(removeItem({id: props.id}))
  }

  return (
    <View style={[styles.itemContainer]}>
      <View style={{}}>
        <View style={[styles.dishAndAmountContainer]}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={removeDish}>
              <View
                style={[styles.increaseButtonSize, {alignItems: 'flex-start'}]}>
                <AntDesignIcons
                  name={'closecircleo'}
                  size={25}
                  color={'black'}
                />
              </View>
            </TouchableOpacity>
            <Text style={[styles.dishText]}>{props.dishName}</Text>
          </View>
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
  },
  increaseButtonSize: {
    justifyContent: 'center',
    height: 40,
    width: 40,
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
