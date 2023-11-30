import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrementItem,
  incrementItem,
  removeItem,
} from '../../redux/shoppingCartSlice';
import {shoppingCartState} from '../../redux/store';
import ShoppingItemButton from './ShoppingItemButton';
import { ShoppingCartItemProps } from '../../interfaces/shoppingCartInterfaces';

/** Displays a single item in the shoppingCart. It receives this item / dish from
 *  redux global shoppingCart, where the items are saved after being added. 
 *  Gives the option to either remove the dish, increment the amount of the dish,
 *  or decrease the amount of the selected dish (but not past 0). 
 *  Displays both the name and price of the dish.
 */
const ShopppingCartItem = (props: ShoppingCartItemProps) => {
  const dispatch = useDispatch();

  /* Finds the item using the id received as a prop*/
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
    dispatch(removeItem({id: props.id}));
  };

  return (
    <View style={[styles.itemContainer]}>
      <View style={{width: '10%'}}>
        <ShoppingItemButton
          name={'closecircle'}
          size={20}
          color={'red'}
          onPress={removeDish}
          isRemoveButton={true}
        />
      </View>
      <View style={{width: '65%'}}>
        <Text style={[styles.text]}>{props.name}</Text>
        <Text>{price} kr</Text>
      </View>
      <View style={{width: '25%'}}>
        <View style={[styles.toggleAmountContainer]}>
          <ShoppingItemButton
            name={'minuscircleo'}
            size={25}
            color={'black'}
            onPress={decreaseAmount}
            isRemoveButton={false}
          />
          <Text style={[styles.text, {alignSelf: 'center'}]}>{amount}</Text>
          <ShoppingItemButton
            name={'pluscircleo'}
            size={25}
            color={'black'}
            onPress={increaseAmount}
            isRemoveButton={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  dishAndAmountContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleAmountContainer: {
    flexDirection: 'row',
  },
});
export default ShopppingCartItem;
