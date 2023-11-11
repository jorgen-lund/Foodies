import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ReceiptMidProps {
  textColor: string;
  borderColor: string;
  date: string;
  totalCost: number;
  isActive: boolean;
}

const ReceiptMid = (props: ReceiptMidProps) => {
  return (
    <View style={[styles.receiptMidContainer]}>
      <View
        style={[
          styles.receiptMidInnerContainer,
          props.isActive ? styles.dashedBorder : styles.solidBorderLeft,
        ]}>
        <Text style={[styles.receiptText, {color: props.textColor}]}>
          Date:
        </Text>
        <Text style={[styles.receiptText, {color: props.textColor}]}>
          {props.date}
        </Text>
      </View>
      <View
        style={[
          styles.receiptMidInnerContainer,
          props.isActive ? styles.dashedBorder : styles.solidBorderRight,
        ]}>
        <Text style={[styles.receiptText, {color: props.textColor}]}>
          Cost:
        </Text>
        <Text style={[styles.receiptText, {color: props.textColor}]}>
          NOK {props.totalCost},-
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  receiptContainer: {
    backgroundColor: '#32BDED',
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
    alignItems: 'center',
    width: '50.6%',
  },
  dashedBorder: {
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: 'white',
  },
  solidBorderLeft: {
    borderWidth: 0.6,
    borderLeftColor: "white",
    borderTopColor: "grey",
    borderBottomColor: "grey",
    borderRightColor: "grey",
  },
  solidBorderRight: {
    borderWidth: 0.6,
    borderLeftColor: "#F1F0F0",
    borderTopColor: "grey",
    borderBottomColor: "grey",
    borderRightColor: "white",
  },
});

export default ReceiptMid;
