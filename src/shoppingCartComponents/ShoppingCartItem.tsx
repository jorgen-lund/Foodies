import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

interface ShopppingCartItemProps {
  dishName: string;
  price: number;
  amount: number;
}

const ShopppingCartItem = (props: ShopppingCartItemProps) => {
  return (
    <View style={[styles.itemContainer]}>
      <View>
        <View style={[styles.dishAndAmountContainer]}>
          <Text style={[styles.dishText]}>{props.dishName}</Text>
          <View style={[styles.toggleAmountContainer]}>
            <TouchableOpacity>
              <View style={[styles.increaseButtonSize]}>
                <FeatherIcons name={'minus-circle'} size={25} />
              </View>
            </TouchableOpacity>
            <Text style={[styles.dishText]}>{props.amount}</Text>
            <TouchableOpacity>
              <View style={[styles.increaseButtonSize]}>
                <FeatherIcons name={'plus-circle'} size={25} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={[styles.priceText]}>{props.price} kr</Text>
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
    alignSelf: 'center',
    fontFamily: 'Suwannaphum-Bold',
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
    fontFamily: 'Suwannaphum-Regular',
    marginTop: -15,
  },
});
export default ShopppingCartItem;
