import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ReceiptOrderProps {
  amount: number;
  dish: string;
  price: number;
}

const ReceiptOrder = (props: ReceiptOrderProps) => {
  return (
    <View style={[styles.receiptOrderContainer]}>
      <View style={[styles.amountContainer]}>
        <Text style={[styles.receiptText]}>{props.amount}</Text>
      </View>
      <View style={[styles.dishContainer]}>
        <Text style={[styles.receiptText]}>{props.dish}</Text>
      </View>
      <View style={[styles.priceContainer]}>
        <Text style={[styles.receiptText]}>NOK {props.price},-</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  receiptOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  amountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "15%",
  },
  dishContainer: {
    width: "49%",
  },
  priceContainer: {
    width: "36%",
  },
  receiptText: {
    fontFamily: 'Suwannaphum-Bold',
    color: 'white',
    fontSize: 16,
  },
});
export default ReceiptOrder;
