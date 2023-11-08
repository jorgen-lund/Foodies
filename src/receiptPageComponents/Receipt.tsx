import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ReceiptProps {
  id: number;
  date: string;
  totalCost: number;
}

const Receipt = (props: ReceiptProps) => {
  return (
    <View style={[styles.receiptContainer]}>
      <View style={[styles.receiptTopContainer]}>
        <Text
          style={[
            styles.receiptText,
            {fontSize: 17, paddingLeft: 15, paddingTop: 10},
          ]}>
          Order ID: #{props.id}
        </Text>
        <View>
          <Text style={[styles.receiptText, {fontSize: 14}]}>
            Food ready in:
          </Text>
          <View style={[styles.durationContainer]}>
            <View style={[styles.numberContainer]}>
              <Text style={[styles.receiptText, {fontSize: 22}]}>4</Text>
            </View>
            <Text style={[styles.receiptText, {fontSize: 16}]}>min</Text>
          </View>
        </View>
      </View>
      <View style={[styles.receiptMidContainer]}>
        <View style={[styles.receiptMidInnerContainer]}>
          <Text style={[styles.receiptText, {fontSize: 16}]}>Date:</Text>
          <Text style={[styles.receiptText, {fontSize: 16}]}>{props.date}</Text>
        </View>
        <View style={[styles.receiptMidInnerContainer]}>
          <Text style={[styles.receiptText, {fontSize: 16}]}>Cost:</Text>
          <Text style={[styles.receiptText, {fontSize: 16}]}>NOK {props.totalCost},-</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  receiptContainer: {
    backgroundColor: '#32BDED',
    borderRadius: 5,
  },
  receiptText: {
    fontFamily: 'Suwannaphum-Bold',
    color: 'white',
  },
  receiptTopContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  numberContainer: {
    backgroundColor: '#006385',
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
  },
  receiptMidContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    borderStyle: "dashed",
    borderColor: "white",
  },
  receiptMidInnerContainer: {
    borderStyle: "dashed",
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
    width: "50.6%",
  }
});
export default Receipt;
