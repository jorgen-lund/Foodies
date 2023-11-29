import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useTranslation } from 'react-i18next';
interface ReceiptMidProps {
  textColor: string;
  borderColor: string;
  date: string;
  totalCost: number;
  isActive: boolean;
}

const ReceiptMid = (props: ReceiptMidProps) => {
  const {t} = useTranslation();

  return (
    <View>
      <View
        style={[styles.dashedLine,props.isActive ? 
        {borderColor: 'white'} : {borderColor: 'black'},]}>
      </View>
      <View style={[styles.receiptMidContainer]}>
        <View style={[styles.receiptMidInnerContainer]}>
          <Text style={[styles.receiptText, {color: props.textColor}]}>
            {t("Date")}:
          </Text>
          <Text style={[styles.receiptText, {color: props.textColor}]}>
            {props.date}
          </Text>
        </View>
        <View
          style={[styles.dashedLine,props.isActive ? 
          {borderColor: 'white'} : {borderColor: 'black'},]}>
        </View>
        <View style={[styles.receiptMidInnerContainer]}>
          <Text style={[styles.receiptText, {color: props.textColor}]}>
            {t("Cost")}:
          </Text>
          <Text style={[styles.receiptText, {color: props.textColor}]}>
            NOK {props.totalCost},-
          </Text>
        </View>
      </View>
      <View
        style={[styles.dashedLine,props.isActive ? 
        {borderColor: 'white'} : {borderColor: 'black'},]}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  receiptText: {
    fontFamily: 'Suwannaphum-Bold',
    color: 'white',
    fontSize: 16,
  },
  receiptMidContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  receiptMidInnerContainer: {
    alignItems: 'center',
    flex: 2,
    marginBottom: 5
  },
  dashedLine: {
    borderWidth: 0.9,
    borderStyle: 'dashed',
    
  },
});

export default ReceiptMid;
