import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

interface ShopppingCartItemProps {
  dishName: string;
  price: number;
  amount: number;
}

const ShopppingCartItem = (props: ShopppingCartItemProps) => {
  const [price, setPrice] = useState(props.price);
  const [amount, setAmount] = useState(props.amount);
  const basePrice = props.price;

  const increaseAmount = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    setPrice(basePrice * newAmount);
  };

  const decreaseAmount = () => {
    if (amount > 0) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      setPrice(newAmount * basePrice);
    }
  };

  return (
    <View style={[styles.itemContainer]}>
      <View>
        <View style={[styles.dishAndAmountContainer]}>
          <Text style={[styles.dishText]}>{props.dishName}</Text>
          <View style={[styles.toggleAmountContainer]}>
            {/* Will use increaseAmount here to increase the amount of a dish being ordered */}
            <TouchableOpacity onPress={decreaseAmount}>
              <View style={[styles.increaseButtonSize]}>
                <FeatherIcons name={'minus-circle'} size={25} />
              </View>
            </TouchableOpacity>
            <Text style={[styles.dishText]}>{amount}</Text>
            {/* Will use decreaseAmount here to decrease the amount of a dish being ordered */}
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
