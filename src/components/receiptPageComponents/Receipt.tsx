import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ReceiptOrder from './ReceiptOrder';
import ReceiptTop from './ReceiptTop';
import ReceiptMid from './ReceiptMid';
import { ReceiptProps } from '../../interfaces/receiptInterfaces';

/* Represents a single purchase. Is built up by three components.
 ReceiptTop, ReceiptMid and a list of orders. 
 Changes styling depending on if it is an active receipt or not. 
 Gets all its values from receiptPage component.
 */
const Receipt = (props: ReceiptProps) => {
  const [receiptColor, setReceiptColor] = useState('#F1F0F0');
  const [textColor, setTextColor] = useState('black');
  const [borderColor, setBorderColor] = useState('grey');

  useEffect(() => {
    if (props.isActive) {
      setReceiptColor('#32BDED');
      setTextColor('white');
      setBorderColor('white');
    }
  }, []);

  return (
    <View
      style={[
        styles.receiptContainer,
        {backgroundColor: receiptColor, borderColor: borderColor},
      ]}>
      <ReceiptTop
        id={props.id}
        isActive={props.isActive}
        waitingTime={props.waitingTime}
        isTakeaway={props.isTakeaway}
      />
      <ReceiptMid
        textColor={textColor}
        borderColor={borderColor}
        date={props.date}
        totalCost={props.totalCost}
        isActive={props.isActive}
      />
      {props.items.map(item => (
        <ReceiptOrder
          key={item.id}
          amount={item.amount}
          dish={item.name}
          price={item.price}
          isActive={props.isActive}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  receiptContainer: {
    backgroundColor: '#32BDED',
    borderRadius: 5,
    marginBottom: 20,
  },
});
export default Receipt;
