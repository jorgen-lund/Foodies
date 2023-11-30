import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ReceiptOrderProps } from '../../interfaces/receiptInterfaces';

/* Bottom part of the receipt. Shows the amount, name and 
   price of the dish. Changes styling depending if it is 
   an active receipt or not.
*/
const ReceiptOrder = (props: ReceiptOrderProps) => {
  let textColor = 'black';

  if (props.isActive) {
    textColor = 'white';
  }

  return (
    <View style={[styles.receiptOrderContainer]}>
      <View style={[styles.amountContainer]}>
        <Text style={[styles.receiptText, {color: textColor}]}>
          {props.amount}
        </Text>
      </View>
      <View style={[styles.dishContainer]}>
        <Text style={[styles.receiptText, {color: textColor}]}>
          {props.dish}
        </Text>
      </View>
      <View style={[styles.priceContainer]}>
        <Text style={[styles.receiptText, {color: textColor}]}>
          NOK {props.price},-
        </Text>
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
    width: '15%',
  },
  dishContainer: {
    width: '49%',
  },
  priceContainer: {
    width: '36%',
  },
  receiptText: {
    fontFamily: 'Suwannaphum-Bold',
    fontSize: 16,
  },
});
export default ReceiptOrder;
