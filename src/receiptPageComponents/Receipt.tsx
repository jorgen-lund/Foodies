import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReceiptOrder from './ReceiptOrder';
import ReceiptTop from './ReceiptTop';

interface ReceiptProps {
  id: number;
  waitingTime: number;
  date: string;
  totalCost: number;
  isActive: boolean;
  // Takes in a list of dish objects I guess is the best solution
}

const Receipt = (props: ReceiptProps) => {
  let recipeColor = '#F1F0F0';
  let textColor = 'black';
  let borderColor = 'grey';

  if (props.isActive) {
    recipeColor = '#32BDED';
    textColor = 'white';
    borderColor = 'white';
  }

  return (
    <View
      style={[
        styles.receiptContainer,
        {backgroundColor: recipeColor, borderColor: borderColor},
      ]}>
      <ReceiptTop id={props.id} isActive={props.isActive} waitingTime={9} />
      <View style={[styles.receiptMidContainer]}>
        <View
          style={[styles.receiptMidInnerContainer, {borderColor: borderColor}]}>
          <Text style={[styles.receiptText, {color: textColor}]}>Date:</Text>
          <Text style={[styles.receiptText, {color: textColor}]}>
            {props.date}
          </Text>
        </View>
        <View
          style={[styles.receiptMidInnerContainer, {borderColor: borderColor}]}>
          <Text style={[styles.receiptText, {color: textColor}]}>Cost:</Text>
          <Text style={[styles.receiptText, {color: textColor}]}>
            NOK {props.totalCost},-
          </Text>
        </View>
      </View>
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
    borderWidth: 0.17,
    marginBottom: 20,
  },
  receiptText: {
    fontFamily: 'Suwannaphum-Bold',
    color: 'white',
    fontSize: 16,
  },
  receiptMidContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  receiptMidInnerContainer: {
    borderStyle: 'dashed',
    // Change inner border color here.
    borderWidth: 1.5,
    alignItems: 'center',
    width: '50.6%',
  },
});
export default Receipt;
