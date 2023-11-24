import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReceiptOrder from './ReceiptOrder';
import ReceiptTop from './ReceiptTop';
import ReceiptMid from './ReceiptMid';

interface ReceiptProps {
  id: number;
  waitingTime: number;
  date: string;
  totalCost: number;
  isActive: boolean;
}

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
    }, [])

  return (
    <View
      style={[
        styles.receiptContainer,
        {backgroundColor: receiptColor, borderColor: borderColor},
      ]}>
      <ReceiptTop id={props.id} isActive={props.isActive} waitingTime={9} />
      <ReceiptMid
        textColor={textColor}
        borderColor={borderColor}
        date={props.date}
        totalCost={props.totalCost} isActive={props.isActive}      />
      <ReceiptOrder
        amount={1}
        dish={'Pasta Bolognese'}
        price={160}
        isActive={props.isActive}
      />
      <ReceiptOrder
        amount={1}
        dish={'Diavola'}
        price={150}
        isActive={props.isActive}
      />
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
